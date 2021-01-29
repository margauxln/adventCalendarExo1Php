inputBags=open("input7.txt").readlines()
dictionnaire= {}
for line in inputBags :
    line = line.strip().split(" bags contain ")
    contians=[]
    for contian in line[1].split(", "):
        if contian[-1] ==".":
            contian = contian[:-1]
        if "bags" in contian:
            contian = contian[:-5]
        elif "bag" in contian:
            contian = contian[:-4]
        contians.append(contian[2:])
        dictionnaire[line[0]]=contians
dictionnaire.pop("shiny gold")
resultat=[]
def quicontient(color):
    tabshiny=[]
    for key,value in dictionnaire.items():
        if color in value:
            tabshiny.append(key)
            resultat.append(key)
    for i in tabshiny:
        quicontient(i)
    return tabshiny
quicontient("shiny gold")

resultatsansdoublon=set(resultat)
print(len(resultatsansdoublon))