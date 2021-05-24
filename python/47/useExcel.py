from excel import OpenExcel

f = OpenExcel('test.xlsx')
f.read('A1')

print(f)
