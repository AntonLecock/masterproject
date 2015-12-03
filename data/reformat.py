import string
import sys

infile=sys.argv[1]
outfile=sys.argv[2]

infile=open(infile,'r')
lines=infile.readlines()
N=len(lines)
infile.close()
out=open(outfile,'w')

for i in range(6,N):
 lines[i]=string.split(lines[i])
L=len(lines[6])


for i in range(6,N):
 newline=lines[i][0] 
 for j in range(1,L): 
  newline=newline+','+lines[i][j]  
 newline=newline+'\n'
 out.write(newline)
out.close()

