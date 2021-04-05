import requests
from  bs4 import BeautifulSoup


movie_html = requests.get('https://movie.naver.com/movie/running/current.nhn')
movie_soup = BeautifulSoup(movie_html.text, "html.parser")
movie_list_box = movie_soup.find("ul", {"class":"lst_detail_t1"})
movie_list = movie_list_box.find_all("li")

def extract_info(movie_list):
    result = []
    for movie in movie_list:
        title = movie.find("dt", {"class":"tit"}).find("a").string
        rate = movie.find("dd", {"class":"star"}).find("span", {"class":"num"}).string
        poster = movie.find("div", {"class":"thumb"}).find("img")["src"]
        director = movie.find("dl", {"class":"info_txt1"}).find_all("a")[1].string
        date = movie.find("dl", {"class":"info_txt1"}).find_all("dd")[0].text.replace('\r','').replace('\t','').replace('\n','')[-13:-3]
        
        actor_lists = movie.find("dl", {"class":"info_txt1"}).find_all("dd")
        if len(actor_lists) == 3:
            actor_lists = actor_lists[2].find_all("a")
        else:
            actor_lists = []
        
        actors = []
        for actor_list in actor_lists:
            actors.append(actor_list.text)

        movie_info = {
            'title' : title,
            'rate' : rate,
            'poster' : poster,
            'director' : director,
            'actors' : actors,
            'date' : date
        }

        result.append(movie_info)
    return result

# print(extract_info(movie_list))