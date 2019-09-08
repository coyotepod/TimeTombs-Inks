var storyContent = ﻿{"inkVersion":19,"root":[[{"#":"theme: dark"},{"#":"author: Master Scoy"},{"#":"title: JOURNEY through the FOREST"},{"->":"04StartMenu"},"\n","\n",{"#":"title: JOURNEY through the FOREST"},{"#":"theme: dark"},{"#":"author: Master Scoy"},"\n",["done",{"#f":5,"#n":"g-0"}],null],"done",{"04StartMenu":[["ev","str","^PRESS START","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","ev",{"VAR?":"04EpisodeOne"},"out","/ev","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["\n",{"->":"04Prologue"},{"#f":5}],"c-1":["\n",{"->":"04Ep1"},"done",{"#f":5}]}],{"#f":1}],"CombatScene":[[[["ev",{"f()":"d4"},1,"+","out","/ev","^ MONSTERS come at you.","\n",["ev",{"VAR?":"CombatStart"},"out","/ev","\n",["^You:","\n",["ev",{"^->":"CombatScene.0.combat1.g-0.g-1.g-2.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^\"Fight!\"",{"->":"$r","var":true},null]}],["ev",{"^->":"CombatScene.0.combat1.g-0.g-1.g-2.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^\"Flee!\"",{"->":"$r","var":true},null]}],["ev",{"^->":"CombatScene.0.combat1.g-0.g-1.g-2.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":2},{"s":["^\"Can we talk about this?\"",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"CombatScene.0.combat1.g-0.g-1.g-2.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.^.^.^.g-3"},{"#f":5}],"c-1":["ev",{"^->":"CombatScene.0.combat1.g-0.g-1.g-2.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],"\n",[["^You attempt to run, but the the party isn't fast enough.","\n",{"->":"CombatScene.0.g-3"},{"#f":5,"#n":"g-0"}],null],{"#f":5}],"c-2":["ev",{"^->":"CombatScene.0.combat1.g-0.g-1.g-2.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n",[["^You attempt to talk.","\n",["<>","^ Diplomacy doesn't seem to be the best option in this situation. Creature gains advantage on its first attack.","\n",{"->":"CombatScene.0.g-3"},{"#f":5,"#n":"g-1"}],{"#f":5,"#n":"g-0"}],null],{"#f":5}],"#f":5,"#n":"g-2"}],{"#f":5,"#n":"g-1"}],{"#f":5,"#n":"g-0"}],{"#f":5,"#n":"combat1"}],{"g-3":["^Roll Initiative.","\n",["ev",{"^->":"CombatScene.0.g-3.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-3","flg":2},{"s":["^Proceed to fight.",{"->":"$r","var":true},null]}],["ev",{"^->":"CombatScene.0.g-3.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-4","flg":2},{"s":["^Combat Encounter HOW-TO:",{"->":"$r","var":true},null]}],{"c-3":["ev",{"^->":"CombatScene.0.g-3.c-3.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.g-4"},{"#f":5}],"c-4":["ev",{"^->":"CombatScene.0.g-3.c-4.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],"\n",[["ev",{"VAR?":"Combat"},"out","/ev","\n","ev","str","^next","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["\n",{"->":".^.^.^.g-1"},{"#f":5}],"#f":5,"#n":"g-0"}],{"g-1":["ev",{"VAR?":"CombatTurns"},"out","/ev","\n",["ev",{"^->":"CombatScene.0.g-3.c-4.7.g-1.5.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^Proceed to fight.",{"->":"$r","var":true},null]}],{"c-1":["ev",{"^->":"CombatScene.0.g-3.c-4.7.g-1.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.5.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.^.^.^.g-4"},{"#f":5}],"#f":5}]}],{"#f":5}],"#f":5}],"g-4":["^**************************","\n","^Combat actions by individuals and each party are determined LIVE in class and not scripted into the story.","\n","^**************************","\n","ev","str","^next","/str","/ev",{"*":".^.c-5","flg":4},{"c-5":["\n",{"->":".^.^.^.g-5"},{"#f":5}],"#f":5}],"g-5":["^The fight is over.","\n",["ev",{"^->":"CombatScene.0.g-5.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","str","^!","/str","/ev",{"*":".^.^.c-6","flg":6},{"s":["^SUCCESS",{"->":"$r","var":true},null]}],["ev",{"^->":"CombatScene.0.g-5.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","str","^!","/str","/ev",{"*":".^.^.c-7","flg":6},{"s":["^FAILURE",{"->":"$r","var":true},null]}],{"c-6":["ev",{"^->":"CombatScene.0.g-5.c-6.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.postcombat"},{"->":".^.^.^.postcombat"},{"#f":5}],"c-7":["ev",{"^->":"CombatScene.0.g-5.c-7.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],"\n",{"->":".^.8.death"},[["<>","\n",["^You have died.","\n","ev","str","^next","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["\n",{"->":"CombatScene.0.postcombat"},{"#f":5}],"#f":5,"#n":"g-0"}],{"#f":5,"#n":"death"}],null],{"#f":5}],"#f":5}],"postcombat":[["^Congratulations on your victory!","\n","ev","str","^next","/str","/ev",{"*":".^.c-8","flg":4},{"c-8":["\n",{"->":".^.^.^.^.g-7"},{"#f":5}],"#f":5,"#n":"g-6"}],{"#f":5}],"g-7":["^Next part of story...","\n","done",{"#f":5}]}],{"#f":1}],"d4":["ev",1,4,"rnd","/ev","~ret","\n",{"#f":1}],"d6":["ev",1,6,"rnd","/ev","~ret","\n",{"#f":1}],"d8":["ev",1,8,"rnd","/ev","~ret","\n",{"#f":1}],"d10":["ev",1,10,"rnd","/ev","~ret","\n",{"#f":1}],"d12":["ev",1,12,"rnd","/ev","~ret","\n",{"#f":1}],"d20":["ev",1,20,"rnd","/ev","~ret","\n",{"#f":1}],"d100":[["ev",1,100,"rnd","/ev","~ret","\n","^WONDER DRAFT SETTINGS","\n",["^Water Texture: Worn","\n",["^Ground Texture: Worn","\n",["^FX Blends: slider to the 'h'","\n",["^Coastline Style: Irregular Blend","\n","^OVERLAY","\n",["^Regional & World SIZE 32 (1 hex = 5 miles)","\n",["^Local & Interior SIZE (1 square = 5 feet)","\n","^COLORS","\n","^Grass:","\n","^COPIC Grass Green YG17","\n","^RGB (114,193,86)","\n","^HEX ",{"#":"72c156"},"\n","^HEX ",{"#":"a9c79f"},"\n","^Forest:","\n","^COPIC","\n","^RGB (39,78,19, 255)","\n","^HEX ",{"#":"274e13"},"\n","^SYMBOL SCALES","\n","^20% for Regional & World Scale","\n","^50% for Regional Scale","\n","^100% for Local Scale","\n","^GROUND LIGHT BROWN","\n","^HEX ",{"#":"d8b48f"},"\n","^HUT","\n",{"#":"43 for round huts (25% for regional)"},{"#f":5,"#n":"g-5"}],{"#f":5,"#n":"g-4"}],{"#f":5,"#n":"g-3"}],{"#f":5,"#n":"g-2"}],{"#f":5,"#n":"g-1"}],{"#f":5,"#n":"g-0"}],null],{"#f":1}],"GlobalVariables":["done",{"#f":1}],"04Prologue":[["^PROLOGUE","\n",["ev",{"VAR?":"Maid"},"out","/ev","^: \"Welcome weary adventurers!\"","\n",["ev",{"VAR?":"Maid"},"out","/ev","^ greets your party with a ",["ev","visit",3,"seq","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"ev","du",2,"==","/ev",{"->":".^.s2","c":true},"nop",{"s0":["pop","^warm",{"->":".^.^.23"},null],"s1":["pop","^ big",{"->":".^.^.23"},null],"s2":["pop","^ kind",{"->":".^.^.23"},null],"#f":5}],"^ smile at The Blue Mug inn.","\n",["ev",{"^->":"04Prologue.0.g-0.g-1.8.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","str","^\"","/str","/ev",{"*":".^.^.c-0","flg":6},{"s":["^You: \"Hello Jane!",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"04Prologue.0.g-0.g-1.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.8.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.^.g-2"},{"#f":5}],"#f":5,"#n":"g-1"}],{"#f":5,"#n":"g-0"}],{"g-2":["<>","^ We grow ",["ev","visit",2,"seq","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"nop",{"s0":["pop","^bored",{"->":".^.^.17"},null],"s1":["pop","^tired",{"->":".^.^.17"},null],"#f":5}],"^ of town life. What news of adventures do you have?\"","\n","ev","str","^next","/str","/ev",{"*":".^.c-1","flg":4},{"c-1":["\n",{"->":".^.^.^.g-3"},{"#f":5}],"#f":5}],"g-3":["ev",{"VAR?":"Maid"},"out","/ev","^: \"The lord of Noordvlakten province, Sir Alfred Russel Wallace, is crafting an epic quest. Rumored to be inspired by a local adventurering party's recent bravery.\"","\n","ev",{"VAR?":"Maid"},"out","/ev","^ ",["ev","visit",2,"seq","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"nop",{"s0":["pop","^winks at you",{"->":".^.^.17"},null],"s1":["pop","^nudges you with an elbow",{"->":".^.^.17"},null],"#f":5}],"^.","\n",["ev",{"VAR?":"Maid"},"out","/ev","^: \"Details are sparse at this point and I've heard its by invitation only.\"","\n",["^You:","\n",["ev",{"^->":"04Prologue.0.g-3.g-4.g-5.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":2},{"s":["^\"That sounds interesting.\"",{"->":"$r","var":true},null]}],["ev",{"^->":"04Prologue.0.g-3.g-4.g-5.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","str","^\"","/str","/ev",{"*":".^.^.c-3","flg":6},{"s":["^Shrug your shoulders \"That's all well and good for the lords",{"->":"$r","var":true},null]}],{"c-2":["ev",{"^->":"04Prologue.0.g-3.g-4.g-5.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.^.^.g-6"},{"#f":5}],"c-3":["ev",{"^->":"04Prologue.0.g-3.g-4.g-5.c-3.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],"\n",[["<>","^ , but doesn't really help us out.\"","\n",["ev",{"VAR?":"Maid"},"out","/ev","^: \"What if I told you, a liveryman delivered this for you yesterday?\"","\n",{"->":"04Prologue.0.g-6"},{"#f":5,"#n":"g-1"}],{"#f":5,"#n":"g-0"}],null],{"#f":5}],"#f":5,"#n":"g-5"}],{"#f":5,"#n":"g-4"}],{"#f":5}],"g-6":["^She hands you a scroll.","\n",["ev",{"^->":"04Prologue.0.g-6.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-4","flg":2},{"s":["^You open it and read it.",{"->":"$r","var":true},null]}],["ev",{"^->":"04Prologue.0.g-6.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-5","flg":2},{"s":["^Put it in your pack for later.",{"->":"$r","var":true},null]}],{"c-4":["ev",{"^->":"04Prologue.0.g-6.c-4.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.g-7"},{"#f":5}],"c-5":["ev",{"^->":"04Prologue.0.g-6.c-5.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],"\n",[["^You: \"I'll take a look at this later. Thank you!\"","\n",["^You try to enjoy a beverage and food. After one glass and half your meal, curiosity gets the better of you.","\n",["ev",{"^->":"04Prologue.0.g-6.c-5.7.g-0.g-1.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^You open the scroll.",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"04Prologue.0.g-6.c-5.7.g-0.g-1.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n",{"->":"04Prologue.0.g-7"},{"#f":5}],"#f":5,"#n":"g-1"}],{"#f":5,"#n":"g-0"}],null],{"#f":5}],"#f":5}],"g-7":["<>","^ Its an invitation to a special event at the Canis Villa town hall tomorrow. Its signed by Sir Alfred Wallace, but otherwise no other details are given in the invitation.","\n",{"#":"IMAGE: Images/scroll-message.png"},"ev","str","^next","/str","/ev",{"*":".^.c-6","flg":4},{"c-6":["\n",{"->":".^.^.^.g-8"},{"#f":5}],"#f":5}],"g-8":["^The next day your party and 17 other times arrival at the town hall at noon. A servant in the livery of Sir Alfred Russel Wallace enters the main hall with this announcement:","\n","ev","str","^next","/str","/ev",{"*":".^.c-7","flg":4},{"c-7":["\n",{"->":".^.^.^.g-9"},{"#f":5}],"#f":5}],"g-9":["^Your team has earned an invitation to an amazing race around the world of Regio Scientiae. Any team that can go around the world in 80 days will earn a payout of 2,000 gold pieces for the team. The fastest party will earn 10,000 gold pieces.","\n","ev","str","^next","/str","/ev",{"*":".^.c-8","flg":4},{"c-8":["\n",{"->":".^.^.^.g-10"},{"#f":5}],"#f":5}],"g-10":["^There are a few rules.","\n","^1) No teleportation or otherwise magicking from location to location.","\n","^2) Parties may not attack one another.","\n","^Good luck!","\n","ev","str","^next","/str","/ev",{"*":".^.c-9","flg":4},{"c-9":["\n",{"->":".^.^.^.g-11"},{"#f":5}],"#f":5}],"g-11":["^The teams bolt from the room. In the scramble, a few trip over each other and unceremoniously fall into benches. Not the best way to start a race! A handful of others were more prepared and posted themselves near the door. They make quick retreats.","\n","ev","str","^Ω","/str","/ev",{"*":".^.c-10","flg":4},"ev","str","^NEXT EPISODE","/str","/ev",{"*":".^.c-11","flg":4},{"c-10":["\n",{"->":"04StartMenu"},{"#f":5}],"c-11":["\n",{"->":"04Ep1"},"done",{"#f":5}],"#f":5}]}],{"#f":1}],"04Ep1":[["ev",{"VAR?":"04EpisodeOne"},"out","/ev","\n","^STAGE 1: EASTPORT","\n",["^Eastport is the nearest coastal town and is about 25 miles away. You could travel by foot or purchase horses. Your party discusses this and other options. The first leg of the trip around the world has started. Most teams have chosen to go by horse. There are a few eccentric travel choices as well.","\n",{"#":"IMAGE: /Images/figure01"},["^FIGURE 1","\n",["^Walking: 8 hrs","\n",["^Running: 4 hrs","\n",["^Horse (75 GP/person)","\n",["^Walking: 4 hrs","\n",["^Running: 2 hrs","\n","ev","str","^next","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["\n",{"->":"04Ep1.0.g-7"},{"#f":5}],"#f":5,"#n":"g-6"}],{"#f":5,"#n":"g-5"}],{"#f":5,"#n":"g-4"}],{"#f":5,"#n":"g-3"}],{"#f":5,"#n":"g-2"}],{"#f":5,"#n":"g-1"}],{"#f":5,"#n":"g-0"}],{"g-7":["^EASTPORT","\n",["^Although its the largest port in this region, Eastport is a small port in comparison to others in the realm. Most buildings are single or double story with only a couple of three story timber buildings. Aside from their occupations - seafaring folk rather than farmers - the people of Eastport are much like the people of Canis Villa. They are just trying to eek out a modest life and not worry about the affairs of the larger realm.","\n","ev","str","^next","/str","/ev",{"*":".^.c-1","flg":4},{"c-1":["\n",{"->":"04Ep1.0.g-9"},{"#f":5}],"#f":5,"#n":"g-8"}],{"#f":5}],"g-9":["^The first two parties to arrive are the International Lions and the Dolphins. Both parties head farther east into town towards the docks, but turn north to an open grassy area before reaching the docks. In the open space a large airship sits at the ready. Its fully inflated and moored to the ground with large stakes and ropes.","\n",["ev","str","^Ω","/str","/ev",{"*":".^.c-2","flg":4},"ev","str","^NEXT EPISODE","/str","/ev",{"*":".^.c-3","flg":4},{"c-2":["\n",{"->":"04StartMenu"},{"#f":5}],"c-3":["\n",{"->":"04Ep1"},"done",{"#f":5}],"#f":5,"#n":"end_episode"}],{"#f":5}]}],{"#f":1}],"04Ep2":[["ev",{"VAR?":"04EpisodeTwo"},"out","/ev","\n","ev","str","^Ω","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^NEXT EPISODE","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["\n",{"->":"04StartMenu"},{"#f":5}],"c-1":["\n",{"->":"04Ep3"},"done",{"#f":5}]}],{"#f":1}],"04Ep3":[["ev",{"VAR?":"04EpisodeThree"},"out","/ev","\n","ev","str","^Ω","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^NEXT EPISODE","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["\n",{"->":"04StartMenu"},{"#f":5}],"c-1":["\n",{"->":"04Ep4"},"done",{"#f":5}]}],{"#f":1}],"04Ep4":[["ev",{"VAR?":"04EpisodeFour"},"out","/ev","\n","ev","str","^Ω","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^NEXT EPISODE","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["\n",{"->":"04StartMenu"},{"#f":5}],"c-1":["\n",{"->":"04Ep5"},"done",{"#f":5}]}],{"#f":1}],"04Ep5":[["ev",{"VAR?":"04EpisodeFive"},"out","/ev","\n","ev","str","^Ω","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^NEXT EPISODE","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["\n",{"->":"04StartMenu"},{"#f":5}],"c-1":["\n",{"->":"04Epilogue"},"done",{"#f":5}]}],{"#f":1}],"04Epilogue":["^EPILOGUE","\n","end",{"#f":1}],"global decl":["ev","str","^This story takes place in \"Regio Scientiae: A Land of Understanding.\" Its a world of magic and invention. The story is a Choose Your Own Adventure (CYOA) which means You are an reader and active Player in story. The narratives can be done solo, but they are best experienced the first time as playful interaction with the Master Scoy (game master and teacher) and other real life Players (your classmates). NOTE: I do my best to make it functional and interesting, but if you encounter dead ends or have story suggestions - let me know!","/str",{"VAR=":"WorldSetting"},"str","^Purpose of the series...","/str",{"VAR=":"CYOAPurpose"},"str","^ROOM ONE: Gain Entrance","/str",{"VAR=":"RoomOne"},"str","^ROOM TWO: Puzzle or Role-play Challenge","/str",{"VAR=":"RoomTwo"},"str","^ROOM THREE: Setback","/str",{"VAR=":"RoomThree"},"str","^ROOM FOUR: Big Battle","/str",{"VAR=":"RoomFour"},"str","^ROOM FIVE: Revelation","/str",{"VAR=":"RoomFive"},"str","^Your","/str",{"VAR=":"Your"},"str","^You","/str",{"VAR=":"You"},"str","^CLERIC","/str",{"VAR=":"Cleric"},"str","^The cleric","/str",{"VAR=":"TheCleric"},"str","^the cleric","/str",{"VAR=":"theCleric"},"str","^FIGHTER","/str",{"VAR=":"Fighter"},"str","^The fighter","/str",{"VAR=":"TheFighter"},"str","^the fighter","/str",{"VAR=":"theFighter"},"str","^ROGUE","/str",{"VAR=":"Rogue"},"str","^The rogue","/str",{"VAR=":"TheRogue"},"str","^the rogue","/str",{"VAR=":"theRogue"},"str","^WIZARD","/str",{"VAR=":"Wizard"},"str","^The wizard","/str",{"VAR=":"TheWizard"},"str","^the wizard","/str",{"VAR=":"theWizard"},"str","^Fin","/str",{"VAR=":"Innkeeper"},"str","^Jane","/str",{"VAR=":"Maid"},"str","^Suzie","/str",{"VAR=":"MaidTwo"},"str","^Cedalion","/str",{"VAR=":"DwarfSmith"},"str","^Hephaestus","/str",{"VAR=":"ForgeMaster"},"str","^Malum Magus","/str",{"VAR=":"EvilMage"},"str","^Queen Justina","/str",{"VAR=":"Queen"},"str","^Noord Vlakte","/str",{"VAR=":"NobleFamily"},"str","^James","/str",{"VAR=":"Farmer1"},"str","^Robert","/str",{"VAR=":"Farmer2"},"str","^Dan","/str",{"VAR=":"Villager1"},"str","^Timothy","/str",{"VAR=":"Boy1"},"str","^Becca","/str",{"VAR=":"Girl1"},"str","^Mr. Hillenar","/str",{"VAR=":"Castellan"},"str","^Timothy","/str",{"VAR=":"FarmBoy"},"str","^Professor Leyder","/str",{"VAR=":"ProfessorL"},"str","^Axel","/str",{"VAR=":"Axel"},"str","^James","/str",{"VAR=":"YoungMiner"},"str","^Susan","/str",{"VAR=":"YoungMinerWife"},"str","^Canis Villa","/str",{"VAR=":"village00"},"str","^Yellow Wharf","/str",{"VAR=":"village40"},"str","^Dagger Town","/str",{"VAR=":"village41"},"str","^Verdant Bay","/str",{"VAR=":"village42"},"str","^Berwickshire","/str",{"VAR=":"village5"},"str","^Iron Forge","/str",{"VAR=":"DwarfCity"},"str","^Storm Crown","/str",{"VAR=":"CapitalCity"},"str","^The Blue Mug","/str",{"VAR=":"BlueMug"},"str","^Salty Carp","/str",{"VAR=":"SeaTavern"},"str","^Inn 2","/str",{"VAR=":"inn2"},"str","^Clun Castle","/str",{"VAR=":"CastleOne"},"str","^Muilder Slot","/str",{"VAR=":"CastleTwo"},"str","^Celestial Tower","/str",{"VAR=":"CelestialTower"},"str","^Lunae Tower","/str",{"VAR=":"MoonTower"},"str","^Helios Tower","/str",{"VAR=":"SunTower"},"str","^Nergal Tower","/str",{"VAR=":"MarsTower"},"str","^Calda Vale","/str",{"VAR=":"region1"},"str","^Noord Vlaktes","/str",{"VAR=":"region2"},"str","^","/str",{"VAR=":"region3"},"str","^","/str",{"VAR=":"region4"},"str","^","/str",{"VAR=":"region5"},"str","^","/str",{"VAR=":"region6"},"str","^","/str",{"VAR=":"region7"},"str","^8","/str",{"VAR=":"region8"},"str","^","/str",{"VAR=":"region9"},"str","^","/str",{"VAR=":"region10"},"str","^Bear Islands","/str",{"VAR=":"BearIslands"},"str","^Misty Mountain","/str",{"VAR=":"mountains1"},"str","^Mountain 2","/str",{"VAR=":"mountains2"},"str","^Mountain 3","/str",{"VAR=":"mountains3"},"str","^Mountain 4","/str",{"VAR=":"mountains4"},"str","^Mountain 5","/str",{"VAR=":"mountains5"},"str","^Snarfell","/str",{"VAR=":"volcano1"},"str","^Arrakis","/str",{"VAR=":"desert1"},"str","^Sonoran","/str",{"VAR=":"desert2"},"str","^","/str",{"VAR=":"desert3"},"str","^","/str",{"VAR=":"forest1"},"str","^","/str",{"VAR=":"forest2"},"str","^","/str",{"VAR=":"forest3"},"str","^","/str",{"VAR=":"grassland1"},"str","^","/str",{"VAR=":"grassland2"},"str","^","/str",{"VAR=":"grassland3"},"str","^","/str",{"VAR=":"tundra1"},"str","^","/str",{"VAR=":"tundra2"},"str","^","/str",{"VAR=":"tundra3"},"str","^River 1","/str",{"VAR=":"river1"},"str","^River 2","/str",{"VAR=":"river2"},"str","^River 3","/str",{"VAR=":"river3"},"str","^River 4","/str",{"VAR=":"river4"},"str","^River 5","/str",{"VAR=":"river5"},"str","^Hicks Lake","/str",{"VAR=":"lake1"},"str","^Big Lake","/str",{"VAR=":"lake2"},"str","^Lake Mishigami","/str",{"VAR=":"lake3"},"str","^Lake 4","/str",{"VAR=":"lake4"},"str","^Lake 5","/str",{"VAR=":"lake5"},"str","^North Sea","/str",{"VAR=":"NorthSea"},"str","^South Sea","/str",{"VAR=":"SouthSea"},"str","^West Sea","/str",{"VAR=":"WestSea"},"str","^East Sea","/str",{"VAR=":"EastSea"},"str","^Sea of Falling Stars","/str",{"VAR=":"Sea5"},"str","^BANDIT AC: 12 HP: 11","/str",{"VAR=":"BanditStats"},"str","^SCIMITAR +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) slashing damage.","/str",{"VAR=":"BanditAction1"},"str","^LIGHT CROSSBOW +3 to hit, range 80 ft./320 ft., one target. Hit: 5 (1d8 + 1) piercing damage.","/str",{"VAR=":"BanditAction2"},"str","^","/str",{"VAR=":"Drow"},"str","^","/str",{"VAR=":"DrowAction1"},"str","^","/str",{"VAR=":"DrowAction2"},"str","^AC: HP:","/str",{"VAR=":"CaveBearStats"},"str","^BITE","/str",{"VAR=":"CaveBearAction1"},"str","^CLAW","/str",{"VAR=":"CaveBearAction2"},"str","^","/str",{"VAR=":"AirElementalStats"},"str","^","/str",{"VAR=":"AirElementalAction1"},"str","^","/str",{"VAR=":"AirElementalAction2"},"str","^","/str",{"VAR=":"FireElementalStats"},"str","^","/str",{"VAR=":"FireElementalAction1"},"str","^","/str",{"VAR=":"FireElementalAction2"},"str","^","/str",{"VAR=":"EarthElementalStats"},"str","^","/str",{"VAR=":"EarthElementalAction1"},"str","^","/str",{"VAR=":"EarthElementalAction2"},"str","^","/str",{"VAR=":"WaterElementalStats"},"str","^","/str",{"VAR=":"WaterElementalAction1"},"str","^","/str",{"VAR=":"WaterElementalAction2"},"str","^","/str",{"VAR=":"SkeletonStats"},"str","^","/str",{"VAR=":"SkeletonAction1"},"str","^","/str",{"VAR=":"SkeletonAction2"},"str","^","/str",{"VAR=":"SpectreStats"},"str","^","/str",{"VAR=":"SpectreAction1"},"str","^","/str",{"VAR=":"SpectreAction2"},"str","^<b>GIANT SPIDER</b>  AC:14 HP: 26","/str",{"VAR=":"GiantSpider"},"str","^<b>Spider Bite</b> +5 to hit, 7 piercing damage, target must make a Constitution saving throw, taking 9 poison damage on a failed save (4 damage on a successful one)","/str",{"VAR=":"GiantSpiderAction1"},"str","^<b>Web</b> +5 to hit, range 30/60 ft. The target is restrained by webbing. As an action, the restrained target can make a  Strength check bursting the webbing on a success. The webbing can also be attacked and destroyed","/str",{"VAR=":"GiantSpiderAction2"},"str","^An encounter has started. What do you do?","/str",{"VAR=":"CombatStart"},"str","^A combat encounter is a fight between two sides. It might involve a flurry of weapon swings, punches, kicks, blocks (parries), spellcasting, or other actions. Combat is organized into a series of rounds and turns. During a round, each player takes a turn deciding what action(s) to take. The order of turns is determined when everyone rolls initiative (d20) at the very beginning of the combat encounter. Once everyone has taken a turn the round is over. Combat continues to the next round if neither side wins, flees, or ends the combat in some way.","/str",{"VAR=":"Combat"},"str","^Combat Step by Step:  (1) Determine Surprise. The GM determines whether anyone involved in the combat encounter is surprised. (2) Establish positions: The GM decides where all the characters and Monsters are located. Given the adventurers’ Marching Order or their stated positions in the room or other location, the GM figures out where the adversaries are̶how far away and in what direction. (3) Roll Initiative: Everyone involved in the combat encounter rolls Initiative, determining the order of combatants’ turns. (4) Take turns. Each participant in the battle takes a turn in Initiative order. (5) Begin the next round. When everyone involved in the combat has had a turn, the round ends. Repeat step 4 until the fighting stops.","/str",{"VAR=":"CombatTurns"},"str","^The encounter is complete.","/str",{"VAR=":"CombatEnd"},"str","^Habits of Mind","/str",{"VAR=":"Topic01"},"str","^WANDERING in the CAVE","/str",{"VAR=":"Season01"},"str","^What are habits of mind","/str",{"VAR=":"Q01"},"str","^What habits of mind make a person successful?","/str",{"VAR=":"Q01b"},"str","^","/str",{"VAR=":"Ph01"},"str","^THE BLUE MUG","/str",{"VAR=":"01EpisodeOne"},"str","^THE MINE","/str",{"VAR=":"01EpisodeTwo"},"str","^A CREATURE","/str",{"VAR=":"01EpisodeThree"},"str","^THE ROOM","/str",{"VAR=":"01EpisodeFour"},"str","^OUT OF TIME","/str",{"VAR=":"01EpisodeFive"},"str","^","/str",{"VAR=":"Topic02"},"str","^DISCOVERY in the MOUNTAIN","/str",{"VAR=":"Season02"},"str","^THE ILLNESS","/str",{"VAR=":"02EpisodeOne"},"str","^THE MOUNTAIN","/str",{"VAR=":"02EpisodeTwo"},"str","^LEADVILLE","/str",{"VAR=":"02EpisodeThree"},"str","^A CAVE","/str",{"VAR=":"02EpisodeFour"},"str","^THE MOUNTAIN II.","/str",{"VAR=":"02EpisodeFive"},"str","^","/str",{"VAR=":"Topic03"},"str","^EXPEDITION in the DESERT","/str",{"VAR=":"Season03"},"str","^INSULAR MARSUPLIA","/str",{"VAR=":"03EpisodeOne"},"str","^ARRAKIS","/str",{"VAR=":"03EpisodeTwo"},"str","^ROOM THREE: Setback","/str",{"VAR=":"03EpisodeThree"},"str","^ROOM FOUR: Big Battle","/str",{"VAR=":"03EpisodeFour"},"str","^ROOM FIVE: Revelation","/str",{"VAR=":"03EpisodeFive"},"str","^","/str",{"VAR=":"Topic04"},"str","^JOURNEY through the FOREST","/str",{"VAR=":"Season04"},"str","^ROOM ONE: Gain Entrance","/str",{"VAR=":"04EpisodeOne"},"str","^ROOM TWO: Puzzle or Role-play Challenge","/str",{"VAR=":"04EpisodeTwo"},"str","^ROOM THREE: Setback","/str",{"VAR=":"04EpisodeThree"},"str","^ROOM FOUR: Big Battle","/str",{"VAR=":"04EpisodeFour"},"str","^ROOM FIVE: Revelation","/str",{"VAR=":"04EpisodeFive"},"str","^","/str",{"VAR=":"Topic05"},"str","^VOYAGE across the GRASSLAND","/str",{"VAR=":"Season05"},"str","^ROOM ONE: Gain Entrance","/str",{"VAR=":"05EpisodeOne"},"str","^ROOM TWO: Puzzle or Role-play Challenge","/str",{"VAR=":"05EpisodeTwo"},"str","^ROOM THREE: Setback","/str",{"VAR=":"05EpisodeThree"},"str","^ROOM FOUR: Big Battle","/str",{"VAR=":"05EpisodeFour"},"str","^ROOM FIVE: Revelation","/str",{"VAR=":"05EpisodeFive"},"str","^","/str",{"VAR=":"Topic06"},"str","^ADVENTURE on the WATER","/str",{"VAR=":"Season06"},"str","^ROOM ONE: Gain Entrance","/str",{"VAR=":"06EpisodeOne"},"str","^ROOM TWO: Puzzle or Role-play Challenge","/str",{"VAR=":"06EpisodeTwo"},"str","^ROOM THREE: Setback","/str",{"VAR=":"06EpisodeThree"},"str","^ROOM FOUR: Big Battle","/str",{"VAR=":"06EpisodeFour"},"str","^ROOM FIVE: Revelation5","/str",{"VAR=":"06EpisodeFive"},"str","^","/str",{"VAR=":"TimeTombsRumorsOne"},"str","^","/str",{"VAR=":"TimeTombsRumorsTwo"},"str","^","/str",{"VAR=":"TimeTombsRumorsThree"},"str","^","/str",{"VAR=":"TimeTombsRumorsFour"},"str","^","/str",{"VAR=":"TimeTombsRumorsFive"},"str","^move along trying be undetected","/str",{"VAR=":"MoveStealth"},"str","^walk","/str",{"VAR=":"MoveWalk"},"str","^move briskly","/str",{"VAR=":"MoveHustle"},"str","^run","/str",{"VAR=":"MoveRun"},{"list":{"inventory.none":1}},{"VAR=":"inventory"},{"list":{"kits.zero":1}},{"VAR=":"kits"},{"list":{},"origins":["weapons"]},{"VAR=":"weapons"},{"list":{"armor.none":1}},{"VAR=":"armor"},{"list":{"healing.none":1}},{"VAR=":"healing"},{"list":{"specialItems.none":1}},{"VAR=":"specialItems"},{"list":{"ore.none":1}},{"VAR=":"ore"},"str","^meteorite ore","/str",{"VAR=":"ore30"},"str","^palladium ore","/str",{"VAR=":"ore31"},"str","^thorium ore","/str",{"VAR=":"ore32"},"str","^the Sickle of Cronus","/str",{"VAR=":"EpicWeapon"},"str","^The Sickle of Cronus is used to battle the beast in the Time Tombs. It can only be crafted at the forge of Hephaestus. The hearth must be crafted with special bricks. The hearth bricks are from a special type of rock only found deep in the planet's interior where players battle an earth elemental and fire elemental. The fire is started and maintained from the essence of a fire elemental. The bellows must be filled with the essence of an air elemental. The ore of the sickle comes from a meteorite. The sickle blade must be quenched in oil and water when complete though that water must come from the essence of a water elemental.","/str",{"VAR=":"EpicWeaponAbout"},"str","^It would stand to reason that glacial melt will be running lowest in the morning and highest in afternoon and early evening","/str",{"VAR=":"GlacialRiverMelt"},{"list":{"DeathQuotes.none":1}},{"VAR=":"DeathQuotes"},"str","^I have always depended on the kindness of strangers. ~ Tennessee Williams","/str",{"VAR=":"DeathQuote1"},"str","^Do or do not, there is no try. ~ Master Yoda","/str",{"VAR=":"DeathQuote2"},"str","^I get knocked down, but I get up again. I get knocked down, but I get up again. ~ Chumbawamba","/str",{"VAR=":"DeathQuote3"},"str","^Continual Flame: LEVEL 2nd; CASTING TIME: 1 Action RANGE/AREA Touch COMPONENTS V, S, M * DURATION Until Dispelled SCHOOL Evocation ATTACK/SAVE None DAMAGE/EFFECT Creation A flame, equivalent in brightness to a torch, springs forth from an object that you touch. The effect looks like a regular flame, but it creates no heat and doesn't use oxygen. A continual flame can be covered or hidden but not smothered or quenched. * - (ruby dust worth 50 gp, which the spell consumes)","/str",{"VAR=":"ContinualFlame"},"/ev","end",null],"#f":1}],"listDefs":{"inventory":{"none":1,"flint_and_steel":2},"kits":{"zero":1,"ClimbingKit":2,"HerbalistKit":3},"weapons":{"fists":1,"dagger":2},"armor":{"none":1,"leather":2,"chain_mail":3,"plate_armor":4},"healing":{"none":1,"potion_of_minor_healing":2},"specialItems":{"none":1,"AirEssence":2,"EarthEssence":3,"FireEssence":4,"WaterEssence":5},"ore":{"none":1,"CopperOre":2,"IronOre":3,"MeteoriteOre":4,"ThoriumOre":5,"PalladiumOre":6},"DeathQuotes":{"none":1}}};