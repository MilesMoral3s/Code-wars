#Where are we meeting.

def meeting(rooms):
    free = 'O'
    if free in rooms:
        return rooms.index(free)
    else:
        return 'None available!'