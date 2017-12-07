
from bs4 import BeautifulSoup
import os

print "starting script..."



def replace (nameFile , tabLink , cpt , tag):
    fileSources = open(nameFile, "r")
    contentSources = fileSources.read()
    stringToAdd = "<"+tag+">" + contentSources + " </"+tag+">"
    tabLink[cpt].replaceWith(BeautifulSoup(stringToAdd, "html.parser"))

def find_between( s, first, last ):
    try:
        start = s.index( first ) + len( first )
        end = s.index( last, start )
        return s[start:end]
    except ValueError:
        return ""


print "-----------------------------------------------------------------"
print "GENERATE A UNIQUE HTML FILE"
print "need BeautifulSoup to run => pip install beautifulsoup4"



fileHtml = open("../build/index.html" , "r")
contentHtml = fileHtml.read()
soup = BeautifulSoup (contentHtml , "html.parser")
tabLink = soup.find_all('link')
cpt = 0


fileScript = open("../build" + soup("script")[0]["src"] , "r")
contentScript = fileScript.read()

soup.body.append(BeautifulSoup("<script>"+contentScript+"</script>" , "html.parser"))


for oneLink in tabLink: # put css in html
    print oneLink["href"]
    if oneLink["href"][:4] == "http": #download file and replace with their content
        webUrl = oneLink["href"]
        command = "wget " + webUrl
        os.system(command)
        tabUrl = webUrl.split('/')
        indiceName = len(tabUrl)-1
        nameFile = tabUrl[indiceName]
        replace(nameFile , tabLink , cpt , "style")


    elif oneLink["href"][:1] == "/" and oneLink["href"][-3:] == "css": #local css file
        print ('FOUND LOCAL CSS FILE' , oneLink["href"])
        nameFile = "../build" + oneLink["href"]
        replace(nameFile , tabLink , cpt , "style")
    cpt = cpt +1


os.system("rm *.css")

os.system("touch formulaires.html")
fileResult = open("formulaires.html" , "w")
fileResult.write(soup.prettify())
