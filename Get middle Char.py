#Program to take any string and throw out the middle letters
#if its even number then take the middle two characters
#if if string is odd number then take out one character

def get_middle(s):
    half = int(len(s)/2)
    #get the first exception out of the way
    if len(s) == 1:
        return s

    if len(s)%2 == 0:
        return s[half-1:half+1]
    else:
        return s[half]

