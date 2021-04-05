import requests
from bs4 import BeautifulSoup
import movie
import csv

file = open('movie.csv', mode='w', newline='')
writer = csv.writer(file)
writer.writerow(['title', 'rate', 'poster', 'director', 'actors', 'date'])

final_result = []
for page in range(30):
    final_result += movie.extract_info(movie.movie_list)

for result in final_result:
    row = []
    row.append(result['title'])
    row.append(result['rate'])
    row.append(result['poster'])
    row.append(result['director'])
    row.append(result['actors'])
    row.append(result['date'])
    writer.writerow(row)

print(final_result)