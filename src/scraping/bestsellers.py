import json
from bs4 import BeautifulSoup
import requests


def get_url(year):
    return f"https://en.wikipedia.org/wiki/Publishers_Weekly_list_of_bestselling_novels_in_the_United_States_in_the_{year}s"


decades = [
    1950,
    1960,
    1970,
    1980,
    1990,
    2000,
    2010,
    2020,
]

bestseller_data = {}

for decade in decades:
    print(f"Processing year: {decade}")
    url = get_url(decade)
    result = requests.get(url)
    if result.status_code == 200:
        soup = BeautifulSoup(result.text, "html.parser")

        ordered_lists = soup.find_all("ol")

        count = 0
        for ordered_list in ordered_lists[:-1]:
            top_novel = ordered_list.find_next("li")
            anchors = top_novel.find_all("a")
            print(
                f"Year: {decade + count} Novel: {anchors[0].string} Author: {anchors[1].string}"
            )
            bestseller_data[decade + count] = {
                "title": anchors[0].string,
                "author": anchors[1].string,
                "image": f"/images/book_covers/{decade}s/{decade + count}.jpg",
            }

            count += 1
    else:
        print("Request Failed")

with open("bestsellers.json", mode="w") as f:
    f.write(json.dumps(bestseller_data))
