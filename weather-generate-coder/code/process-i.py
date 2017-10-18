#!/usr/local/bin/python
# code ..
from itertools import islice
import sys
#pal_name = 'W-01'
print("begin process.....")
for i in range(1,len(sys.argv)):
    pal_name = sys.argv[i]
    print("process " + pal_name)
    with open('../pal/'+pal_name+'.pal') as file:
        with open("../code_txt/"+pal_name+"_CODE.txt", 'w') as code_file:
            code_file.write("switch(value) {\n")
            for line in islice(file,1,None):
                row = line.split()
                #print(row)
                temp = "case " + str(int(row[0])-1)+ ":\n" +"    " + "color = new Color("+ row[3]+", "+ row[2]+ ", " +row[1]+ ", 255"  +");\n" + "    break;\n"
                code_file.write(temp)
            code_file.write("default:\n    color = new Color(0, 0, 0, 255);\n break;")
            code_file.write("\n}")
    print('process '+ pal_name+' finished...')
