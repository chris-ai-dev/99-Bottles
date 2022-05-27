def bottle_song():
	# write your code here!
	# name = input("what is your name?")
	# print("your name is " + name)
	
	bottles = 99
	while bottles > 0:
		print(f"{bottles} bottles of beer on the wall, {bottles} bottles of beer.\nTake one down and pass it around, {bottles-1}  bottles of beer on the wall.")
		bottles -= 1
		if bottles == 1:
			print(f"Take one down and pass it around, no more bottles of beer on the wall.\nNo more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.")
			break





bottle_song()
