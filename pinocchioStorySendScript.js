async function enviarScript(scriptText){
	const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
	main = document.querySelector("#main"),
	textarea = main.querySelector(`div[contenteditable="true"]`)
	
	if(!textarea) throw new Error("Não há uma conversa aberta")
	
	for(const line of lines){
		console.log(line)
	
		textarea.focus();
		document.execCommand('insertText', false, line);
		textarea.dispatchEvent(new Event('change', {bubbles: true}));
	
		setTimeout(() => {
			(main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
		}, 100);
		
		if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
	}
	
	return lines.length;
}

enviarScript(`
Pinocchio

shouted Geppetto.

Once upon a time there was a carver named Geppetto.
 He made puppets out of pieces of wood and called his favorite puppet Pinocchio.

- I would love to be the father of a real boy like Pinocchio - he wished.

That night, the blue fairy, who knew that Geppetto was a good man, cast a spell on Pinocchio.
 The next day, Gappetto woke up and was very happy to discover that Pinocchio could walk, sit and talk like a real boy.

Geppetto wanted to send Pinocchio to school. He sold his only coat for a spelling book.

- Now you can go to school like a real boy - help Gappetto as we wave to Pinocchio.

 
On the way to school, Pinocchio stopped to watch a puppet show in a town.

- Would you like to participate in my puppet show? - asked the evil puppet master.

Pinocchio happily agreed. He was locked inside the evil puppet master's caravan.
 He wished he was safe with Geppetto. The blue fairy suddenly appeared.
  She listened to Pinocchio's desire and freed him. Pinocchio is happy to be free.

- I'm going straight to school - he said.

But he met an evil fox who told him about a wonderful place called Fun Island.
 Pinocchio completely forgot about school and gave the fox his spelling book in exchange for a ticket to Fun Island.

- Where are you going, Pinocchio? - asked the fairy b.

- I'm going to school - Pinocchio lied.

Pinocchio's nose became very, very long.
 He wishes he hadn't lied. The fairy called a bird to peck her long nose because Pinocchio was very sorry.
  Pinocchio promised never to be naughty again and went straight to school.

At school, Pinocchio told his friend all about Fun Island.
 His friend wanted to go with him. Pinocchio and his companions boarded a ship heading to Fun Island.
  On the island, they did not know that boys were turned into donkeys and used for very hard work.

Pinocchio cried and wished he hadn't come to the island.
 He also wished he didn't look like a silly ass.
  The blue fairy heard his wish and with a wave of her magic wand his donkey ears and tail disappeared.
   Sad Pinocchio on the beach, sadly looking at the sea. He wondered if he would ever see Geppetto again.

Suddenly he saw Geppetto, who sailed out to sea in search of Pinocchio. Geppetto didn't see the huge whale behind him. The whale swallowed Geppetto and his boat.
 Pinocchio knew he needed to save Geppetto. He jumped into the water and swam with all his might.
  As he approached, the whale opened its mouth and Pinocchio walked straight in.
   Deep inside the whale's belly, Pinocchio and Geppetto hugged each other, happy to be together again.

- We need to find a way out - said Gepeto - we will make a fire with the wood from my boat.

The smoke made the whale sneeze. They left the whale's mouth and returned to the sea.
 Pinocchio and Geppetto swam safely to shore. They were both tired. They lay down on the sand and fell asleep.
  When Geppetto woke up, he saw that the blue fairy, as a reward for being so brave, had transformed Pinocchio into a real boy.

- Finally my wish came true! 

Pinocchio

shouted Geppetto.

Once upon a time there was a carver named Geppetto.
 He made puppets out of pieces of wood and called his favorite puppet Pinocchio.

- I would love to be the father of a real boy like Pinocchio - he wished.

That night, the blue fairy, who knew that Geppetto was a good man, cast a spell on Pinocchio.
 The next day, Gappetto woke up and was very happy to discover that Pinocchio could walk, sit and talk like a real boy.

Geppetto wanted to send Pinocchio to school. He sold his only coat for a spelling book.

- Now you can go to school like a real boy - help Gappetto as we wave to Pinocchio.

 
On the way to school, Pinocchio stopped to watch a puppet show in a town.

- Would you like to participate in my puppet show? - asked the evil puppet master.

Pinocchio happily agreed. He was locked inside the evil puppet master's caravan.
 He wished he was safe with Geppetto. The blue fairy suddenly appeared.
  She listened to Pinocchio's desire and freed him. Pinocchio is happy to be free.

- I'm going straight to school - he said.

But he met an evil fox who told him about a wonderful place called Fun Island.
 Pinocchio completely forgot about school and gave the fox his spelling book in exchange for a ticket to Fun Island.

- Where are you going, Pinocchio? - asked the fairy b.

- I'm going to school - Pinocchio lied.

Pinocchio's nose became very, very long.
 He wishes he hadn't lied. The fairy called a bird to peck her long nose because Pinocchio was very sorry.
  Pinocchio promised never to be naughty again and went straight to school.

At school, Pinocchio told his friend all about Fun Island.
 His friend wanted to go with him. Pinocchio and his companions boarded a ship heading to Fun Island.
  On the island, they did not know that boys were turned into donkeys and used for very hard work.

Pinocchio cried and wished he hadn't come to the island.
 He also wished he didn't look like a silly ass.
  The blue fairy heard his wish and with a wave of her magic wand his donkey ears and tail disappeared.
   Sad Pinocchio on the beach, sadly looking at the sea. He wondered if he would ever see Geppetto again.

Suddenly he saw Geppetto, who sailed out to sea in search of Pinocchio. Geppetto didn't see the huge whale behind him. The whale swallowed Geppetto and his boat.
 Pinocchio knew he needed to save Geppetto. He jumped into the water and swam with all his might.
  As he approached, the whale opened its mouth and Pinocchio walked straight in.
   Deep inside the whale's belly, Pinocchio and Geppetto hugged each other, happy to be together again.

- We need to find a way out - said Gepeto - we will make a fire with the wood from my boat.

The smoke made the whale sneeze. They left the whale's mouth and returned to the sea.
 Pinocchio and Geppetto swam safely to shore. They were both tired. They lay down on the sand and fell asleep.
  When Geppetto woke up, he saw that the blue fairy, as a reward for being so brave, had transformed Pinocchio into a real boy.

- Finally my wish came true!
Pinocchio

shouted Geppetto.

Once upon a time there was a carver named Geppetto.
 He made puppets out of pieces of wood and called his favorite puppet Pinocchio.

- I would love to be the father of a real boy like Pinocchio - he wished.

That night, the blue fairy, who knew that Geppetto was a good man, cast a spell on Pinocchio.
 The next day, Gappetto woke up and was very happy to discover that Pinocchio could walk, sit and talk like a real boy.

Geppetto wanted to send Pinocchio to school. He sold his only coat for a spelling book.

- Now you can go to school like a real boy - help Gappetto as we wave to Pinocchio.

 
On the way to school, Pinocchio stopped to watch a puppet show in a town.

- Would you like to participate in my puppet show? - asked the evil puppet master.

Pinocchio happily agreed. He was locked inside the evil puppet master's caravan.
 He wished he was safe with Geppetto. The blue fairy suddenly appeared.
  She listened to Pinocchio's desire and freed him. Pinocchio is happy to be free.

- I'm going straight to school - he said.

But he met an evil fox who told him about a wonderful place called Fun Island.
 Pinocchio completely forgot about school and gave the fox his spelling book in exchange for a ticket to Fun Island.

- Where are you going, Pinocchio? - asked the fairy b.

- I'm going to school - Pinocchio lied.

Pinocchio's nose became very, very long.
 He wishes he hadn't lied. The fairy called a bird to peck her long nose because Pinocchio was very sorry.
  Pinocchio promised never to be naughty again and went straight to school.

At school, Pinocchio told his friend all about Fun Island.
 His friend wanted to go with him. Pinocchio and his companions boarded a ship heading to Fun Island.
  On the island, they did not know that boys were turned into donkeys and used for very hard work.

Pinocchio cried and wished he hadn't come to the island.
 He also wished he didn't look like a silly ass.
  The blue fairy heard his wish and with a wave of her magic wand his donkey ears and tail disappeared.
   Sad Pinocchio on the beach, sadly looking at the sea. He wondered if he would ever see Geppetto again.

Suddenly he saw Geppetto, who sailed out to sea in search of Pinocchio. Geppetto didn't see the huge whale behind him. The whale swallowed Geppetto and his boat.
 Pinocchio knew he needed to save Geppetto. He jumped into the water and swam with all his might.
  As he approached, the whale opened its mouth and Pinocchio walked straight in.
   Deep inside the whale's belly, Pinocchio and Geppetto hugged each other, happy to be together again.

- We need to find a way out - said Gepeto - we will make a fire with the wood from my boat.

The smoke made the whale sneeze. They left the whale's mouth and returned to the sea.
 Pinocchio and Geppetto swam safely to shore. They were both tired. They lay down on the sand and fell asleep.
  When Geppetto woke up, he saw that the blue fairy, as a reward for being so brave, had transformed Pinocchio into a real boy.

- Finally my wish came true!
Pinocchio

shouted Geppetto.

Once upon a time there was a carver named Geppetto.
 He made puppets out of pieces of wood and called his favorite puppet Pinocchio.

- I would love to be the father of a real boy like Pinocchio - he wished.

That night, the blue fairy, who knew that Geppetto was a good man, cast a spell on Pinocchio.
 The next day, Gappetto woke up and was very happy to discover that Pinocchio could walk, sit and talk like a real boy.

Geppetto wanted to send Pinocchio to school. He sold his only coat for a spelling book.

- Now you can go to school like a real boy - help Gappetto as we wave to Pinocchio.

 
On the way to school, Pinocchio stopped to watch a puppet show in a town.

- Would you like to participate in my puppet show? - asked the evil puppet master.

Pinocchio happily agreed. He was locked inside the evil puppet master's caravan.
 He wished he was safe with Geppetto. The blue fairy suddenly appeared.
  She listened to Pinocchio's desire and freed him. Pinocchio is happy to be free.

- I'm going straight to school - he said.

But he met an evil fox who told him about a wonderful place called Fun Island.
 Pinocchio completely forgot about school and gave the fox his spelling book in exchange for a ticket to Fun Island.

- Where are you going, Pinocchio? - asked the fairy b.

- I'm going to school - Pinocchio lied.

Pinocchio's nose became very, very long.
 He wishes he hadn't lied. The fairy called a bird to peck her long nose because Pinocchio was very sorry.
  Pinocchio promised never to be naughty again and went straight to school.

At school, Pinocchio told his friend all about Fun Island.
 His friend wanted to go with him. Pinocchio and his companions boarded a ship heading to Fun Island.
  On the island, they did not know that boys were turned into donkeys and used for very hard work.

Pinocchio cried and wished he hadn't come to the island.
 He also wished he didn't look like a silly ass.
  The blue fairy heard his wish and with a wave of her magic wand his donkey ears and tail disappeared.
   Sad Pinocchio on the beach, sadly looking at the sea. He wondered if he would ever see Geppetto again.

Suddenly he saw Geppetto, who sailed out to sea in search of Pinocchio. Geppetto didn't see the huge whale behind him. The whale swallowed Geppetto and his boat.
 Pinocchio knew he needed to save Geppetto. He jumped into the water and swam with all his might.
  As he approached, the whale opened its mouth and Pinocchio walked straight in.
   Deep inside the whale's belly, Pinocchio and Geppetto hugged each other, happy to be together again.

- We need to find a way out - said Gepeto - we will make a fire with the wood from my boat.

The smoke made the whale sneeze. They left the whale's mouth and returned to the sea.
 Pinocchio and Geppetto swam safely to shore. They were both tired. They lay down on the sand and fell asleep.
  When Geppetto woke up, he saw that the blue fairy, as a reward for being so brave, had transformed Pinocchio into a real boy.

- Finally my wish came true!
Pinocchio

shouted Geppetto.

Once upon a time there was a carver named Geppetto.
 He made puppets out of pieces of wood and called his favorite puppet Pinocchio.

- I would love to be the father of a real boy like Pinocchio - he wished.

That night, the blue fairy, who knew that Geppetto was a good man, cast a spell on Pinocchio.
 The next day, Gappetto woke up and was very happy to discover that Pinocchio could walk, sit and talk like a real boy.

Geppetto wanted to send Pinocchio to school. He sold his only coat for a spelling book.

- Now you can go to school like a real boy - help Gappetto as we wave to Pinocchio.

 
On the way to school, Pinocchio stopped to watch a puppet show in a town.

- Would you like to participate in my puppet show? - asked the evil puppet master.

Pinocchio happily agreed. He was locked inside the evil puppet master's caravan.
 He wished he was safe with Geppetto. The blue fairy suddenly appeared.
  She listened to Pinocchio's desire and freed him. Pinocchio is happy to be free.

- I'm going straight to school - he said.

But he met an evil fox who told him about a wonderful place called Fun Island.
 Pinocchio completely forgot about school and gave the fox his spelling book in exchange for a ticket to Fun Island.

- Where are you going, Pinocchio? - asked the fairy b.

- I'm going to school - Pinocchio lied.

Pinocchio's nose became very, very long.
 He wishes he hadn't lied. The fairy called a bird to peck her long nose because Pinocchio was very sorry.
  Pinocchio promised never to be naughty again and went straight to school.

At school, Pinocchio told his friend all about Fun Island.
 His friend wanted to go with him. Pinocchio and his companions boarded a ship heading to Fun Island.
  On the island, they did not know that boys were turned into donkeys and used for very hard work.

Pinocchio cried and wished he hadn't come to the island.
 He also wished he didn't look like a silly ass.
  The blue fairy heard his wish and with a wave of her magic wand his donkey ears and tail disappeared.
   Sad Pinocchio on the beach, sadly looking at the sea. He wondered if he would ever see Geppetto again.

Suddenly he saw Geppetto, who sailed out to sea in search of Pinocchio. Geppetto didn't see the huge whale behind him. The whale swallowed Geppetto and his boat.
 Pinocchio knew he needed to save Geppetto. He jumped into the water and swam with all his might.
  As he approached, the whale opened its mouth and Pinocchio walked straight in.
   Deep inside the whale's belly, Pinocchio and Geppetto hugged each other, happy to be together again.

- We need to find a way out - said Gepeto - we will make a fire with the wood from my boat.

The smoke made the whale sneeze. They left the whale's mouth and returned to the sea.
 Pinocchio and Geppetto swam safely to shore. They were both tired. They lay down on the sand and fell asleep.
  When Geppetto woke up, he saw that the blue fairy, as a reward for being so brave, had transformed Pinocchio into a real boy.

- Finally my wish came true!
Pinocchio

shouted Geppetto.

Once upon a time there was a carver named Geppetto.
 He made puppets out of pieces of wood and called his favorite puppet Pinocchio.

- I would love to be the father of a real boy like Pinocchio - he wished.

That night, the blue fairy, who knew that Geppetto was a good man, cast a spell on Pinocchio.
 The next day, Gappetto woke up and was very happy to discover that Pinocchio could walk, sit and talk like a real boy.

Geppetto wanted to send Pinocchio to school. He sold his only coat for a spelling book.

- Now you can go to school like a real boy - help Gappetto as we wave to Pinocchio.

 
On the way to school, Pinocchio stopped to watch a puppet show in a town.

- Would you like to participate in my puppet show? - asked the evil puppet master.

Pinocchio happily agreed. He was locked inside the evil puppet master's caravan.
 He wished he was safe with Geppetto. The blue fairy suddenly appeared.
  She listened to Pinocchio's desire and freed him. Pinocchio is happy to be free.

- I'm going straight to school - he said.

But he met an evil fox who told him about a wonderful place called Fun Island.
 Pinocchio completely forgot about school and gave the fox his spelling book in exchange for a ticket to Fun Island.

- Where are you going, Pinocchio? - asked the fairy b.

- I'm going to school - Pinocchio lied.

Pinocchio's nose became very, very long.
 He wishes he hadn't lied. The fairy called a bird to peck her long nose because Pinocchio was very sorry.
  Pinocchio promised never to be naughty again and went straight to school.

At school, Pinocchio told his friend all about Fun Island.
 His friend wanted to go with him. Pinocchio and his companions boarded a ship heading to Fun Island.
  On the island, they did not know that boys were turned into donkeys and used for very hard work.

Pinocchio cried and wished he hadn't come to the island.
 He also wished he didn't look like a silly ass.
  The blue fairy heard his wish and with a wave of her magic wand his donkey ears and tail disappeared.
   Sad Pinocchio on the beach, sadly looking at the sea. He wondered if he would ever see Geppetto again.

Suddenly he saw Geppetto, who sailed out to sea in search of Pinocchio. Geppetto didn't see the huge whale behind him. The whale swallowed Geppetto and his boat.
 Pinocchio knew he needed to save Geppetto. He jumped into the water and swam with all his might.
  As he approached, the whale opened its mouth and Pinocchio walked straight in.
   Deep inside the whale's belly, Pinocchio and Geppetto hugged each other, happy to be together again.

- We need to find a way out - said Gepeto - we will make a fire with the wood from my boat.

The smoke made the whale sneeze. They left the whale's mouth and returned to the sea.
 Pinocchio and Geppetto swam safely to shore. They were both tired. They lay down on the sand and fell asleep.
  When Geppetto woke up, he saw that the blue fairy, as a reward for being so brave, had transformed Pinocchio into a real boy.

- Finally my wish came true!
Pinocchio

shouted Geppetto.

Once upon a time there was a carver named Geppetto.
 He made puppets out of pieces of wood and called his favorite puppet Pinocchio.

- I would love to be the father of a real boy like Pinocchio - he wished.

That night, the blue fairy, who knew that Geppetto was a good man, cast a spell on Pinocchio.
 The next day, Gappetto woke up and was very happy to discover that Pinocchio could walk, sit and talk like a real boy.

Geppetto wanted to send Pinocchio to school. He sold his only coat for a spelling book.

- Now you can go to school like a real boy - help Gappetto as we wave to Pinocchio.

 
On the way to school, Pinocchio stopped to watch a puppet show in a town.

- Would you like to participate in my puppet show? - asked the evil puppet master.

Pinocchio happily agreed. He was locked inside the evil puppet master's caravan.
 He wished he was safe with Geppetto. The blue fairy suddenly appeared.
  She listened to Pinocchio's desire and freed him. Pinocchio is happy to be free.

- I'm going straight to school - he said.

But he met an evil fox who told him about a wonderful place called Fun Island.
 Pinocchio completely forgot about school and gave the fox his spelling book in exchange for a ticket to Fun Island.

- Where are you going, Pinocchio? - asked the fairy b.

- I'm going to school - Pinocchio lied.

Pinocchio's nose became very, very long.
 He wishes he hadn't lied. The fairy called a bird to peck her long nose because Pinocchio was very sorry.
  Pinocchio promised never to be naughty again and went straight to school.

At school, Pinocchio told his friend all about Fun Island.
 His friend wanted to go with him. Pinocchio and his companions boarded a ship heading to Fun Island.
  On the island, they did not know that boys were turned into donkeys and used for very hard work.

Pinocchio cried and wished he hadn't come to the island.
 He also wished he didn't look like a silly ass.
  The blue fairy heard his wish and with a wave of her magic wand his donkey ears and tail disappeared.
   Sad Pinocchio on the beach, sadly looking at the sea. He wondered if he would ever see Geppetto again.

Suddenly he saw Geppetto, who sailed out to sea in search of Pinocchio. Geppetto didn't see the huge whale behind him. The whale swallowed Geppetto and his boat.
 Pinocchio knew he needed to save Geppetto. He jumped into the water and swam with all his might.
  As he approached, the whale opened its mouth and Pinocchio walked straight in.
   Deep inside the whale's belly, Pinocchio and Geppetto hugged each other, happy to be together again.

- We need to find a way out - said Gepeto - we will make a fire with the wood from my boat.

The smoke made the whale sneeze. They left the whale's mouth and returned to the sea.
 Pinocchio and Geppetto swam safely to shore. They were both tired. They lay down on the sand and fell asleep.
  When Geppetto woke up, he saw that the blue fairy, as a reward for being so brave, had transformed Pinocchio into a real boy.

- Finally my wish came true!
Pinocchio

shouted Geppetto.

Once upon a time there was a carver named Geppetto.
 He made puppets out of pieces of wood and called his favorite puppet Pinocchio.

- I would love to be the father of a real boy like Pinocchio - he wished.

That night, the blue fairy, who knew that Geppetto was a good man, cast a spell on Pinocchio.
 The next day, Gappetto woke up and was very happy to discover that Pinocchio could walk, sit and talk like a real boy.

Geppetto wanted to send Pinocchio to school. He sold his only coat for a spelling book.

- Now you can go to school like a real boy - help Gappetto as we wave to Pinocchio.

 
On the way to school, Pinocchio stopped to watch a puppet show in a town.

- Would you like to participate in my puppet show? - asked the evil puppet master.

Pinocchio happily agreed. He was locked inside the evil puppet master's caravan.
 He wished he was safe with Geppetto. The blue fairy suddenly appeared.
  She listened to Pinocchio's desire and freed him. Pinocchio is happy to be free.

- I'm going straight to school - he said.

But he met an evil fox who told him about a wonderful place called Fun Island.
 Pinocchio completely forgot about school and gave the fox his spelling book in exchange for a ticket to Fun Island.

- Where are you going, Pinocchio? - asked the fairy b.

- I'm going to school - Pinocchio lied.

Pinocchio's nose became very, very long.
 He wishes he hadn't lied. The fairy called a bird to peck her long nose because Pinocchio was very sorry.
  Pinocchio promised never to be naughty again and went straight to school.

At school, Pinocchio told his friend all about Fun Island.
 His friend wanted to go with him. Pinocchio and his companions boarded a ship heading to Fun Island.
  On the island, they did not know that boys were turned into donkeys and used for very hard work.

Pinocchio cried and wished he hadn't come to the island.
 He also wished he didn't look like a silly ass.
  The blue fairy heard his wish and with a wave of her magic wand his donkey ears and tail disappeared.
   Sad Pinocchio on the beach, sadly looking at the sea. He wondered if he would ever see Geppetto again.

Suddenly he saw Geppetto, who sailed out to sea in search of Pinocchio. Geppetto didn't see the huge whale behind him. The whale swallowed Geppetto and his boat.
 Pinocchio knew he needed to save Geppetto. He jumped into the water and swam with all his might.
  As he approached, the whale opened its mouth and Pinocchio walked straight in.
   Deep inside the whale's belly, Pinocchio and Geppetto hugged each other, happy to be together again.

- We need to find a way out - said Gepeto - we will make a fire with the wood from my boat.

The smoke made the whale sneeze. They left the whale's mouth and returned to the sea.
 Pinocchio and Geppetto swam safely to shore. They were both tired. They lay down on the sand and fell asleep.
  When Geppetto woke up, he saw that the blue fairy, as a reward for being so brave, had transformed Pinocchio into a real boy.

- Finally my wish came true!
Pinocchio

shouted Geppetto.

Once upon a time there was a carver named Geppetto.
 He made puppets out of pieces of wood and called his favorite puppet Pinocchio.

- I would love to be the father of a real boy like Pinocchio - he wished.

That night, the blue fairy, who knew that Geppetto was a good man, cast a spell on Pinocchio.
 The next day, Gappetto woke up and was very happy to discover that Pinocchio could walk, sit and talk like a real boy.

Geppetto wanted to send Pinocchio to school. He sold his only coat for a spelling book.

- Now you can go to school like a real boy - help Gappetto as we wave to Pinocchio.

 
On the way to school, Pinocchio stopped to watch a puppet show in a town.

- Would you like to participate in my puppet show? - asked the evil puppet master.

Pinocchio happily agreed. He was locked inside the evil puppet master's caravan.
 He wished he was safe with Geppetto. The blue fairy suddenly appeared.
  She listened to Pinocchio's desire and freed him. Pinocchio is happy to be free.

- I'm going straight to school - he said.

But he met an evil fox who told him about a wonderful place called Fun Island.
 Pinocchio completely forgot about school and gave the fox his spelling book in exchange for a ticket to Fun Island.

- Where are you going, Pinocchio? - asked the fairy b.

- I'm going to school - Pinocchio lied.

Pinocchio's nose became very, very long.
 He wishes he hadn't lied. The fairy called a bird to peck her long nose because Pinocchio was very sorry.
  Pinocchio promised never to be naughty again and went straight to school.

At school, Pinocchio told his friend all about Fun Island.
 His friend wanted to go with him. Pinocchio and his companions boarded a ship heading to Fun Island.
  On the island, they did not know that boys were turned into donkeys and used for very hard work.

Pinocchio cried and wished he hadn't come to the island.
 He also wished he didn't look like a silly ass.
  The blue fairy heard his wish and with a wave of her magic wand his donkey ears and tail disappeared.
   Sad Pinocchio on the beach, sadly looking at the sea. He wondered if he would ever see Geppetto again.

Suddenly he saw Geppetto, who sailed out to sea in search of Pinocchio. Geppetto didn't see the huge whale behind him. The whale swallowed Geppetto and his boat.
 Pinocchio knew he needed to save Geppetto. He jumped into the water and swam with all his might.
  As he approached, the whale opened its mouth and Pinocchio walked straight in.
   Deep inside the whale's belly, Pinocchio and Geppetto hugged each other, happy to be together again.

- We need to find a way out - said Gepeto - we will make a fire with the wood from my boat.

The smoke made the whale sneeze. They left the whale's mouth and returned to the sea.
 Pinocchio and Geppetto swam safely to shore. They were both tired. They lay down on the sand and fell asleep.
  When Geppetto woke up, he saw that the blue fairy, as a reward for being so brave, had transformed Pinocchio into a real boy.

- Finally my wish came true!
Pinocchio

shouted Geppetto.

Once upon a time there was a carver named Geppetto.
 He made puppets out of pieces of wood and called his favorite puppet Pinocchio.

- I would love to be the father of a real boy like Pinocchio - he wished.

That night, the blue fairy, who knew that Geppetto was a good man, cast a spell on Pinocchio.
 The next day, Gappetto woke up and was very happy to discover that Pinocchio could walk, sit and talk like a real boy.

Geppetto wanted to send Pinocchio to school. He sold his only coat for a spelling book.

- Now you can go to school like a real boy - help Gappetto as we wave to Pinocchio.

 
On the way to school, Pinocchio stopped to watch a puppet show in a town.

- Would you like to participate in my puppet show? - asked the evil puppet master.

Pinocchio happily agreed. He was locked inside the evil puppet master's caravan.
 He wished he was safe with Geppetto. The blue fairy suddenly appeared.
  She listened to Pinocchio's desire and freed him. Pinocchio is happy to be free.

- I'm going straight to school - he said.

But he met an evil fox who told him about a wonderful place called Fun Island.
 Pinocchio completely forgot about school and gave the fox his spelling book in exchange for a ticket to Fun Island.

- Where are you going, Pinocchio? - asked the fairy b.

- I'm going to school - Pinocchio lied.

Pinocchio's nose became very, very long.
 He wishes he hadn't lied. The fairy called a bird to peck her long nose because Pinocchio was very sorry.
  Pinocchio promised never to be naughty again and went straight to school.

At school, Pinocchio told his friend all about Fun Island.
 His friend wanted to go with him. Pinocchio and his companions boarded a ship heading to Fun Island.
  On the island, they did not know that boys were turned into donkeys and used for very hard work.

Pinocchio cried and wished he hadn't come to the island.
 He also wished he didn't look like a silly ass.
  The blue fairy heard his wish and with a wave of her magic wand his donkey ears and tail disappeared.
   Sad Pinocchio on the beach, sadly looking at the sea. He wondered if he would ever see Geppetto again.

Suddenly he saw Geppetto, who sailed out to sea in search of Pinocchio. Geppetto didn't see the huge whale behind him. The whale swallowed Geppetto and his boat.
 Pinocchio knew he needed to save Geppetto. He jumped into the water and swam with all his might.
  As he approached, the whale opened its mouth and Pinocchio walked straight in.
   Deep inside the whale's belly, Pinocchio and Geppetto hugged each other, happy to be together again.

- We need to find a way out - said Gepeto - we will make a fire with the wood from my boat.

The smoke made the whale sneeze. They left the whale's mouth and returned to the sea.
 Pinocchio and Geppetto swam safely to shore. They were both tired. They lay down on the sand and fell asleep.
  When Geppetto woke up, he saw that the blue fairy, as a reward for being so brave, had transformed Pinocchio into a real boy.

- Finally my wish came true!
Pinocchio

shouted Geppetto.

Once upon a time there was a carver named Geppetto.
 He made puppets out of pieces of wood and called his favorite puppet Pinocchio.

- I would love to be the father of a real boy like Pinocchio - he wished.

That night, the blue fairy, who knew that Geppetto was a good man, cast a spell on Pinocchio.
 The next day, Gappetto woke up and was very happy to discover that Pinocchio could walk, sit and talk like a real boy.

Geppetto wanted to send Pinocchio to school. He sold his only coat for a spelling book.

- Now you can go to school like a real boy - help Gappetto as we wave to Pinocchio.

 
On the way to school, Pinocchio stopped to watch a puppet show in a town.

- Would you like to participate in my puppet show? - asked the evil puppet master.

Pinocchio happily agreed. He was locked inside the evil puppet master's caravan.
 He wished he was safe with Geppetto. The blue fairy suddenly appeared.
  She listened to Pinocchio's desire and freed him. Pinocchio is happy to be free.

- I'm going straight to school - he said.

But he met an evil fox who told him about a wonderful place called Fun Island.
 Pinocchio completely forgot about school and gave the fox his spelling book in exchange for a ticket to Fun Island.

- Where are you going, Pinocchio? - asked the fairy b.

- I'm going to school - Pinocchio lied.

Pinocchio's nose became very, very long.
 He wishes he hadn't lied. The fairy called a bird to peck her long nose because Pinocchio was very sorry.
  Pinocchio promised never to be naughty again and went straight to school.

At school, Pinocchio told his friend all about Fun Island.
 His friend wanted to go with him. Pinocchio and his companions boarded a ship heading to Fun Island.
  On the island, they did not know that boys were turned into donkeys and used for very hard work.

Pinocchio cried and wished he hadn't come to the island.
 He also wished he didn't look like a silly ass.
  The blue fairy heard his wish and with a wave of her magic wand his donkey ears and tail disappeared.
   Sad Pinocchio on the beach, sadly looking at the sea. He wondered if he would ever see Geppetto again.

Suddenly he saw Geppetto, who sailed out to sea in search of Pinocchio. Geppetto didn't see the huge whale behind him. The whale swallowed Geppetto and his boat.
 Pinocchio knew he needed to save Geppetto. He jumped into the water and swam with all his might.
  As he approached, the whale opened its mouth and Pinocchio walked straight in.
   Deep inside the whale's belly, Pinocchio and Geppetto hugged each other, happy to be together again.

- We need to find a way out - said Gepeto - we will make a fire with the wood from my boat.

The smoke made the whale sneeze. They left the whale's mouth and returned to the sea.
 Pinocchio and Geppetto swam safely to shore. They were both tired. They lay down on the sand and fell asleep.
  When Geppetto woke up, he saw that the blue fairy, as a reward for being so brave, had transformed Pinocchio into a real boy.

- Finally my wish came true!
Pinocchio

shouted Geppetto.

Once upon a time there was a carver named Geppetto.
 He made puppets out of pieces of wood and called his favorite puppet Pinocchio.

- I would love to be the father of a real boy like Pinocchio - he wished.

That night, the blue fairy, who knew that Geppetto was a good man, cast a spell on Pinocchio.
 The next day, Gappetto woke up and was very happy to discover that Pinocchio could walk, sit and talk like a real boy.

Geppetto wanted to send Pinocchio to school. He sold his only coat for a spelling book.

- Now you can go to school like a real boy - help Gappetto as we wave to Pinocchio.

 
On the way to school, Pinocchio stopped to watch a puppet show in a town.

- Would you like to participate in my puppet show? - asked the evil puppet master.

Pinocchio happily agreed. He was locked inside the evil puppet master's caravan.
 He wished he was safe with Geppetto. The blue fairy suddenly appeared.
  She listened to Pinocchio's desire and freed him. Pinocchio is happy to be free.

- I'm going straight to school - he said.

But he met an evil fox who told him about a wonderful place called Fun Island.
 Pinocchio completely forgot about school and gave the fox his spelling book in exchange for a ticket to Fun Island.

- Where are you going, Pinocchio? - asked the fairy b.

- I'm going to school - Pinocchio lied.

Pinocchio's nose became very, very long.
 He wishes he hadn't lied. The fairy called a bird to peck her long nose because Pinocchio was very sorry.
  Pinocchio promised never to be naughty again and went straight to school.

At school, Pinocchio told his friend all about Fun Island.
 His friend wanted to go with him. Pinocchio and his companions boarded a ship heading to Fun Island.
  On the island, they did not know that boys were turned into donkeys and used for very hard work.

Pinocchio cried and wished he hadn't come to the island.
 He also wished he didn't look like a silly ass.
  The blue fairy heard his wish and with a wave of her magic wand his donkey ears and tail disappeared.
   Sad Pinocchio on the beach, sadly looking at the sea. He wondered if he would ever see Geppetto again.

Suddenly he saw Geppetto, who sailed out to sea in search of Pinocchio. Geppetto didn't see the huge whale behind him. The whale swallowed Geppetto and his boat.
 Pinocchio knew he needed to save Geppetto. He jumped into the water and swam with all his might.
  As he approached, the whale opened its mouth and Pinocchio walked straight in.
   Deep inside the whale's belly, Pinocchio and Geppetto hugged each other, happy to be together again.

- We need to find a way out - said Gepeto - we will make a fire with the wood from my boat.

The smoke made the whale sneeze. They left the whale's mouth and returned to the sea.
 Pinocchio and Geppetto swam safely to shore. They were both tired. They lay down on the sand and fell asleep.
  When Geppetto woke up, he saw that the blue fairy, as a reward for being so brave, had transformed Pinocchio into a real boy.

- Finally my wish came true!
Pinocchio

shouted Geppetto.

Once upon a time there was a carver named Geppetto.
 He made puppets out of pieces of wood and called his favorite puppet Pinocchio.

- I would love to be the father of a real boy like Pinocchio - he wished.

That night, the blue fairy, who knew that Geppetto was a good man, cast a spell on Pinocchio.
 The next day, Gappetto woke up and was very happy to discover that Pinocchio could walk, sit and talk like a real boy.

Geppetto wanted to send Pinocchio to school. He sold his only coat for a spelling book.

- Now you can go to school like a real boy - help Gappetto as we wave to Pinocchio.

 
On the way to school, Pinocchio stopped to watch a puppet show in a town.

- Would you like to participate in my puppet show? - asked the evil puppet master.

Pinocchio happily agreed. He was locked inside the evil puppet master's caravan.
 He wished he was safe with Geppetto. The blue fairy suddenly appeared.
  She listened to Pinocchio's desire and freed him. Pinocchio is happy to be free.

- I'm going straight to school - he said.

But he met an evil fox who told him about a wonderful place called Fun Island.
 Pinocchio completely forgot about school and gave the fox his spelling book in exchange for a ticket to Fun Island.

- Where are you going, Pinocchio? - asked the fairy b.

- I'm going to school - Pinocchio lied.

Pinocchio's nose became very, very long.
 He wishes he hadn't lied. The fairy called a bird to peck her long nose because Pinocchio was very sorry.
  Pinocchio promised never to be naughty again and went straight to school.

At school, Pinocchio told his friend all about Fun Island.
 His friend wanted to go with him. Pinocchio and his companions boarded a ship heading to Fun Island.
  On the island, they did not know that boys were turned into donkeys and used for very hard work.

Pinocchio cried and wished he hadn't come to the island.
 He also wished he didn't look like a silly ass.
  The blue fairy heard his wish and with a wave of her magic wand his donkey ears and tail disappeared.
   Sad Pinocchio on the beach, sadly looking at the sea. He wondered if he would ever see Geppetto again.

Suddenly he saw Geppetto, who sailed out to sea in search of Pinocchio. Geppetto didn't see the huge whale behind him. The whale swallowed Geppetto and his boat.
 Pinocchio knew he needed to save Geppetto. He jumped into the water and swam with all his might.
  As he approached, the whale opened its mouth and Pinocchio walked straight in.
   Deep inside the whale's belly, Pinocchio and Geppetto hugged each other, happy to be together again.

- We need to find a way out - said Gepeto - we will make a fire with the wood from my boat.

The smoke made the whale sneeze. They left the whale's mouth and returned to the sea.
 Pinocchio and Geppetto swam safely to shore. They were both tired. They lay down on the sand and fell asleep.
  When Geppetto woke up, he saw that the blue fairy, as a reward for being so brave, had transformed Pinocchio into a real boy.

- Finally my wish came true!
Pinocchio

shouted Geppetto.

Once upon a time there was a carver named Geppetto.
 He made puppets out of pieces of wood and called his favorite puppet Pinocchio.

- I would love to be the father of a real boy like Pinocchio - he wished.

That night, the blue fairy, who knew that Geppetto was a good man, cast a spell on Pinocchio.
 The next day, Gappetto woke up and was very happy to discover that Pinocchio could walk, sit and talk like a real boy.

Geppetto wanted to send Pinocchio to school. He sold his only coat for a spelling book.

- Now you can go to school like a real boy - help Gappetto as we wave to Pinocchio.

 
On the way to school, Pinocchio stopped to watch a puppet show in a town.

- Would you like to participate in my puppet show? - asked the evil puppet master.

Pinocchio happily agreed. He was locked inside the evil puppet master's caravan.
 He wished he was safe with Geppetto. The blue fairy suddenly appeared.
  She listened to Pinocchio's desire and freed him. Pinocchio is happy to be free.

- I'm going straight to school - he said.

But he met an evil fox who told him about a wonderful place called Fun Island.
 Pinocchio completely forgot about school and gave the fox his spelling book in exchange for a ticket to Fun Island.

- Where are you going, Pinocchio? - asked the fairy b.

- I'm going to school - Pinocchio lied.

Pinocchio's nose became very, very long.
 He wishes he hadn't lied. The fairy called a bird to peck her long nose because Pinocchio was very sorry.
  Pinocchio promised never to be naughty again and went straight to school.

At school, Pinocchio told his friend all about Fun Island.
 His friend wanted to go with him. Pinocchio and his companions boarded a ship heading to Fun Island.
  On the island, they did not know that boys were turned into donkeys and used for very hard work.

Pinocchio cried and wished he hadn't come to the island.
 He also wished he didn't look like a silly ass.
  The blue fairy heard his wish and with a wave of her magic wand his donkey ears and tail disappeared.
   Sad Pinocchio on the beach, sadly looking at the sea. He wondered if he would ever see Geppetto again.

Suddenly he saw Geppetto, who sailed out to sea in search of Pinocchio. Geppetto didn't see the huge whale behind him. The whale swallowed Geppetto and his boat.
 Pinocchio knew he needed to save Geppetto. He jumped into the water and swam with all his might.
  As he approached, the whale opened its mouth and Pinocchio walked straight in.
   Deep inside the whale's belly, Pinocchio and Geppetto hugged each other, happy to be together again.

- We need to find a way out - said Gepeto - we will make a fire with the wood from my boat.

The smoke made the whale sneeze. They left the whale's mouth and returned to the sea.
 Pinocchio and Geppetto swam safely to shore. They were both tired. They lay down on the sand and fell asleep.
  When Geppetto woke up, he saw that the blue fairy, as a reward for being so brave, had transformed Pinocchio into a real boy.

- Finally my wish came true!
Pinocchio

shouted Geppetto.

Once upon a time there was a carver named Geppetto.
 He made puppets out of pieces of wood and called his favorite puppet Pinocchio.

- I would love to be the father of a real boy like Pinocchio - he wished.

That night, the blue fairy, who knew that Geppetto was a good man, cast a spell on Pinocchio.
 The next day, Gappetto woke up and was very happy to discover that Pinocchio could walk, sit and talk like a real boy.

Geppetto wanted to send Pinocchio to school. He sold his only coat for a spelling book.

- Now you can go to school like a real boy - help Gappetto as we wave to Pinocchio.

 
On the way to school, Pinocchio stopped to watch a puppet show in a town.

- Would you like to participate in my puppet show? - asked the evil puppet master.

Pinocchio happily agreed. He was locked inside the evil puppet master's caravan.
 He wished he was safe with Geppetto. The blue fairy suddenly appeared.
  She listened to Pinocchio's desire and freed him. Pinocchio is happy to be free.

- I'm going straight to school - he said.

But he met an evil fox who told him about a wonderful place called Fun Island.
 Pinocchio completely forgot about school and gave the fox his spelling book in exchange for a ticket to Fun Island.

- Where are you going, Pinocchio? - asked the fairy b.

- I'm going to school - Pinocchio lied.

Pinocchio's nose became very, very long.
 He wishes he hadn't lied. The fairy called a bird to peck her long nose because Pinocchio was very sorry.
  Pinocchio promised never to be naughty again and went straight to school.

At school, Pinocchio told his friend all about Fun Island.
 His friend wanted to go with him. Pinocchio and his companions boarded a ship heading to Fun Island.
  On the island, they did not know that boys were turned into donkeys and used for very hard work.

Pinocchio cried and wished he hadn't come to the island.
 He also wished he didn't look like a silly ass.
  The blue fairy heard his wish and with a wave of her magic wand his donkey ears and tail disappeared.
   Sad Pinocchio on the beach, sadly looking at the sea. He wondered if he would ever see Geppetto again.

Suddenly he saw Geppetto, who sailed out to sea in search of Pinocchio. Geppetto didn't see the huge whale behind him. The whale swallowed Geppetto and his boat.
 Pinocchio knew he needed to save Geppetto. He jumped into the water and swam with all his might.
  As he approached, the whale opened its mouth and Pinocchio walked straight in.
   Deep inside the whale's belly, Pinocchio and Geppetto hugged each other, happy to be together again.

- We need to find a way out - said Gepeto - we will make a fire with the wood from my boat.

The smoke made the whale sneeze. They left the whale's mouth and returned to the sea.
 Pinocchio and Geppetto swam safely to shore. They were both tired. They lay down on the sand and fell asleep.
  When Geppetto woke up, he saw that the blue fairy, as a reward for being so brave, had transformed Pinocchio into a real boy.

- Finally my wish came true!
Pinocchio

shouted Geppetto.

Once upon a time there was a carver named Geppetto.
 He made puppets out of pieces of wood and called his favorite puppet Pinocchio.

- I would love to be the father of a real boy like Pinocchio - he wished.

That night, the blue fairy, who knew that Geppetto was a good man, cast a spell on Pinocchio.
 The next day, Gappetto woke up and was very happy to discover that Pinocchio could walk, sit and talk like a real boy.

Geppetto wanted to send Pinocchio to school. He sold his only coat for a spelling book.

- Now you can go to school like a real boy - help Gappetto as we wave to Pinocchio.

 
On the way to school, Pinocchio stopped to watch a puppet show in a town.

- Would you like to participate in my puppet show? - asked the evil puppet master.

Pinocchio happily agreed. He was locked inside the evil puppet master's caravan.
 He wished he was safe with Geppetto. The blue fairy suddenly appeared.
  She listened to Pinocchio's desire and freed him. Pinocchio is happy to be free.

- I'm going straight to school - he said.

But he met an evil fox who told him about a wonderful place called Fun Island.
 Pinocchio completely forgot about school and gave the fox his spelling book in exchange for a ticket to Fun Island.

- Where are you going, Pinocchio? - asked the fairy b.

- I'm going to school - Pinocchio lied.

Pinocchio's nose became very, very long.
 He wishes he hadn't lied. The fairy called a bird to peck her long nose because Pinocchio was very sorry.
  Pinocchio promised never to be naughty again and went straight to school.

At school, Pinocchio told his friend all about Fun Island.
 His friend wanted to go with him. Pinocchio and his companions boarded a ship heading to Fun Island.
  On the island, they did not know that boys were turned into donkeys and used for very hard work.

Pinocchio cried and wished he hadn't come to the island.
 He also wished he didn't look like a silly ass.
  The blue fairy heard his wish and with a wave of her magic wand his donkey ears and tail disappeared.
   Sad Pinocchio on the beach, sadly looking at the sea. He wondered if he would ever see Geppetto again.

Suddenly he saw Geppetto, who sailed out to sea in search of Pinocchio. Geppetto didn't see the huge whale behind him. The whale swallowed Geppetto and his boat.
 Pinocchio knew he needed to save Geppetto. He jumped into the water and swam with all his might.
  As he approached, the whale opened its mouth and Pinocchio walked straight in.
   Deep inside the whale's belly, Pinocchio and Geppetto hugged each other, happy to be together again.

- We need to find a way out - said Gepeto - we will make a fire with the wood from my boat.

The smoke made the whale sneeze. They left the whale's mouth and returned to the sea.
 Pinocchio and Geppetto swam safely to shore. They were both tired. They lay down on the sand and fell asleep.
  When Geppetto woke up, he saw that the blue fairy, as a reward for being so brave, had transformed Pinocchio into a real boy.

- Finally my wish came true!
Pinocchio

shouted Geppetto.

Once upon a time there was a carver named Geppetto.
 He made puppets out of pieces of wood and called his favorite puppet Pinocchio.

- I would love to be the father of a real boy like Pinocchio - he wished.

That night, the blue fairy, who knew that Geppetto was a good man, cast a spell on Pinocchio.
 The next day, Gappetto woke up and was very happy to discover that Pinocchio could walk, sit and talk like a real boy.

Geppetto wanted to send Pinocchio to school. He sold his only coat for a spelling book.

- Now you can go to school like a real boy - help Gappetto as we wave to Pinocchio.

 
On the way to school, Pinocchio stopped to watch a puppet show in a town.

- Would you like to participate in my puppet show? - asked the evil puppet master.

Pinocchio happily agreed. He was locked inside the evil puppet master's caravan.
 He wished he was safe with Geppetto. The blue fairy suddenly appeared.
  She listened to Pinocchio's desire and freed him. Pinocchio is happy to be free.

- I'm going straight to school - he said.

But he met an evil fox who told him about a wonderful place called Fun Island.
 Pinocchio completely forgot about school and gave the fox his spelling book in exchange for a ticket to Fun Island.

- Where are you going, Pinocchio? - asked the fairy b.

- I'm going to school - Pinocchio lied.

Pinocchio's nose became very, very long.
 He wishes he hadn't lied. The fairy called a bird to peck her long nose because Pinocchio was very sorry.
  Pinocchio promised never to be naughty again and went straight to school.

At school, Pinocchio told his friend all about Fun Island.
 His friend wanted to go with him. Pinocchio and his companions boarded a ship heading to Fun Island.
  On the island, they did not know that boys were turned into donkeys and used for very hard work.

Pinocchio cried and wished he hadn't come to the island.
 He also wished he didn't look like a silly ass.
  The blue fairy heard his wish and with a wave of her magic wand his donkey ears and tail disappeared.
   Sad Pinocchio on the beach, sadly looking at the sea. He wondered if he would ever see Geppetto again.

Suddenly he saw Geppetto, who sailed out to sea in search of Pinocchio. Geppetto didn't see the huge whale behind him. The whale swallowed Geppetto and his boat.
 Pinocchio knew he needed to save Geppetto. He jumped into the water and swam with all his might.
  As he approached, the whale opened its mouth and Pinocchio walked straight in.
   Deep inside the whale's belly, Pinocchio and Geppetto hugged each other, happy to be together again.

- We need to find a way out - said Gepeto - we will make a fire with the wood from my boat.

The smoke made the whale sneeze. They left the whale's mouth and returned to the sea.
 Pinocchio and Geppetto swam safely to shore. They were both tired. They lay down on the sand and fell asleep.
  When Geppetto woke up, he saw that the blue fairy, as a reward for being so brave, had transformed Pinocchio into a real boy.

- Finally my wish came true!
Pinocchio

shouted Geppetto.

Once upon a time there was a carver named Geppetto.
 He made puppets out of pieces of wood and called his favorite puppet Pinocchio.

- I would love to be the father of a real boy like Pinocchio - he wished.

That night, the blue fairy, who knew that Geppetto was a good man, cast a spell on Pinocchio.
 The next day, Gappetto woke up and was very happy to discover that Pinocchio could walk, sit and talk like a real boy.

Geppetto wanted to send Pinocchio to school. He sold his only coat for a spelling book.

- Now you can go to school like a real boy - help Gappetto as we wave to Pinocchio.

 
On the way to school, Pinocchio stopped to watch a puppet show in a town.

- Would you like to participate in my puppet show? - asked the evil puppet master.

Pinocchio happily agreed. He was locked inside the evil puppet master's caravan.
 He wished he was safe with Geppetto. The blue fairy suddenly appeared.
  She listened to Pinocchio's desire and freed him. Pinocchio is happy to be free.

- I'm going straight to school - he said.

But he met an evil fox who told him about a wonderful place called Fun Island.
 Pinocchio completely forgot about school and gave the fox his spelling book in exchange for a ticket to Fun Island.

- Where are you going, Pinocchio? - asked the fairy b.

- I'm going to school - Pinocchio lied.

Pinocchio's nose became very, very long.
 He wishes he hadn't lied. The fairy called a bird to peck her long nose because Pinocchio was very sorry.
  Pinocchio promised never to be naughty again and went straight to school.

At school, Pinocchio told his friend all about Fun Island.
 His friend wanted to go with him. Pinocchio and his companions boarded a ship heading to Fun Island.
  On the island, they did not know that boys were turned into donkeys and used for very hard work.

Pinocchio cried and wished he hadn't come to the island.
 He also wished he didn't look like a silly ass.
  The blue fairy heard his wish and with a wave of her magic wand his donkey ears and tail disappeared.
   Sad Pinocchio on the beach, sadly looking at the sea. He wondered if he would ever see Geppetto again.

Suddenly he saw Geppetto, who sailed out to sea in search of Pinocchio. Geppetto didn't see the huge whale behind him. The whale swallowed Geppetto and his boat.
 Pinocchio knew he needed to save Geppetto. He jumped into the water and swam with all his might.
  As he approached, the whale opened its mouth and Pinocchio walked straight in.
   Deep inside the whale's belly, Pinocchio and Geppetto hugged each other, happy to be together again.

- We need to find a way out - said Gepeto - we will make a fire with the wood from my boat.

The smoke made the whale sneeze. They left the whale's mouth and returned to the sea.
 Pinocchio and Geppetto swam safely to shore. They were both tired. They lay down on the sand and fell asleep.
  When Geppetto woke up, he saw that the blue fairy, as a reward for being so brave, had transformed Pinocchio into a real boy.

- Finally my wish came true!
Pinocchio

shouted Geppetto.

Once upon a time there was a carver named Geppetto.
 He made puppets out of pieces of wood and called his favorite puppet Pinocchio.

- I would love to be the father of a real boy like Pinocchio - he wished.

That night, the blue fairy, who knew that Geppetto was a good man, cast a spell on Pinocchio.
 The next day, Gappetto woke up and was very happy to discover that Pinocchio could walk, sit and talk like a real boy.

Geppetto wanted to send Pinocchio to school. He sold his only coat for a spelling book.

- Now you can go to school like a real boy - help Gappetto as we wave to Pinocchio.

 
On the way to school, Pinocchio stopped to watch a puppet show in a town.

- Would you like to participate in my puppet show? - asked the evil puppet master.

Pinocchio happily agreed. He was locked inside the evil puppet master's caravan.
 He wished he was safe with Geppetto. The blue fairy suddenly appeared.
  She listened to Pinocchio's desire and freed him. Pinocchio is happy to be free.

- I'm going straight to school - he said.

But he met an evil fox who told him about a wonderful place called Fun Island.
 Pinocchio completely forgot about school and gave the fox his spelling book in exchange for a ticket to Fun Island.

- Where are you going, Pinocchio? - asked the fairy b.

- I'm going to school - Pinocchio lied.

Pinocchio's nose became very, very long.
 He wishes he hadn't lied. The fairy called a bird to peck her long nose because Pinocchio was very sorry.
  Pinocchio promised never to be naughty again and went straight to school.

At school, Pinocchio told his friend all about Fun Island.
 His friend wanted to go with him. Pinocchio and his companions boarded a ship heading to Fun Island.
  On the island, they did not know that boys were turned into donkeys and used for very hard work.

Pinocchio cried and wished he hadn't come to the island.
 He also wished he didn't look like a silly ass.
  The blue fairy heard his wish and with a wave of her magic wand his donkey ears and tail disappeared.
   Sad Pinocchio on the beach, sadly looking at the sea. He wondered if he would ever see Geppetto again.

Suddenly he saw Geppetto, who sailed out to sea in search of Pinocchio. Geppetto didn't see the huge whale behind him. The whale swallowed Geppetto and his boat.
 Pinocchio knew he needed to save Geppetto. He jumped into the water and swam with all his might.
  As he approached, the whale opened its mouth and Pinocchio walked straight in.
   Deep inside the whale's belly, Pinocchio and Geppetto hugged each other, happy to be together again.

- We need to find a way out - said Gepeto - we will make a fire with the wood from my boat.

The smoke made the whale sneeze. They left the whale's mouth and returned to the sea.
 Pinocchio and Geppetto swam safely to shore. They were both tired. They lay down on the sand and fell asleep.
  When Geppetto woke up, he saw that the blue fairy, as a reward for being so brave, had transformed Pinocchio into a real boy.

- Finally my wish came true!
Pinocchio

shouted Geppetto.

Once upon a time there was a carver named Geppetto.
 He made puppets out of pieces of wood and called his favorite puppet Pinocchio.

- I would love to be the father of a real boy like Pinocchio - he wished.

That night, the blue fairy, who knew that Geppetto was a good man, cast a spell on Pinocchio.
 The next day, Gappetto woke up and was very happy to discover that Pinocchio could walk, sit and talk like a real boy.

Geppetto wanted to send Pinocchio to school. He sold his only coat for a spelling book.

- Now you can go to school like a real boy - help Gappetto as we wave to Pinocchio.

 
On the way to school, Pinocchio stopped to watch a puppet show in a town.

- Would you like to participate in my puppet show? - asked the evil puppet master.

Pinocchio happily agreed. He was locked inside the evil puppet master's caravan.
 He wished he was safe with Geppetto. The blue fairy suddenly appeared.
  She listened to Pinocchio's desire and freed him. Pinocchio is happy to be free.

- I'm going straight to school - he said.

But he met an evil fox who told him about a wonderful place called Fun Island.
 Pinocchio completely forgot about school and gave the fox his spelling book in exchange for a ticket to Fun Island.

- Where are you going, Pinocchio? - asked the fairy b.

- I'm going to school - Pinocchio lied.

Pinocchio's nose became very, very long.
 He wishes he hadn't lied. The fairy called a bird to peck her long nose because Pinocchio was very sorry.
  Pinocchio promised never to be naughty again and went straight to school.

At school, Pinocchio told his friend all about Fun Island.
 His friend wanted to go with him. Pinocchio and his companions boarded a ship heading to Fun Island.
  On the island, they did not know that boys were turned into donkeys and used for very hard work.

Pinocchio cried and wished he hadn't come to the island.
 He also wished he didn't look like a silly ass.
  The blue fairy heard his wish and with a wave of her magic wand his donkey ears and tail disappeared.
   Sad Pinocchio on the beach, sadly looking at the sea. He wondered if he would ever see Geppetto again.

Suddenly he saw Geppetto, who sailed out to sea in search of Pinocchio. Geppetto didn't see the huge whale behind him. The whale swallowed Geppetto and his boat.
 Pinocchio knew he needed to save Geppetto. He jumped into the water and swam with all his might.
  As he approached, the whale opened its mouth and Pinocchio walked straight in.
   Deep inside the whale's belly, Pinocchio and Geppetto hugged each other, happy to be together again.

- We need to find a way out - said Gepeto - we will make a fire with the wood from my boat.

The smoke made the whale sneeze. They left the whale's mouth and returned to the sea.
 Pinocchio and Geppetto swam safely to shore. They were both tired. They lay down on the sand and fell asleep.
  When Geppetto woke up, he saw that the blue fairy, as a reward for being so brave, had transformed Pinocchio into a real boy.

- Finally my wish came true!
Pinocchio

shouted Geppetto.

Once upon a time there was a carver named Geppetto.
 He made puppets out of pieces of wood and called his favorite puppet Pinocchio.

- I would love to be the father of a real boy like Pinocchio - he wished.

That night, the blue fairy, who knew that Geppetto was a good man, cast a spell on Pinocchio.
 The next day, Gappetto woke up and was very happy to discover that Pinocchio could walk, sit and talk like a real boy.

Geppetto wanted to send Pinocchio to school. He sold his only coat for a spelling book.

- Now you can go to school like a real boy - help Gappetto as we wave to Pinocchio.

 
On the way to school, Pinocchio stopped to watch a puppet show in a town.

- Would you like to participate in my puppet show? - asked the evil puppet master.

Pinocchio happily agreed. He was locked inside the evil puppet master's caravan.
 He wished he was safe with Geppetto. The blue fairy suddenly appeared.
  She listened to Pinocchio's desire and freed him. Pinocchio is happy to be free.

- I'm going straight to school - he said.

But he met an evil fox who told him about a wonderful place called Fun Island.
 Pinocchio completely forgot about school and gave the fox his spelling book in exchange for a ticket to Fun Island.

- Where are you going, Pinocchio? - asked the fairy b.

- I'm going to school - Pinocchio lied.

Pinocchio's nose became very, very long.
 He wishes he hadn't lied. The fairy called a bird to peck her long nose because Pinocchio was very sorry.
  Pinocchio promised never to be naughty again and went straight to school.

At school, Pinocchio told his friend all about Fun Island.
 His friend wanted to go with him. Pinocchio and his companions boarded a ship heading to Fun Island.
  On the island, they did not know that boys were turned into donkeys and used for very hard work.

Pinocchio cried and wished he hadn't come to the island.
 He also wished he didn't look like a silly ass.
  The blue fairy heard his wish and with a wave of her magic wand his donkey ears and tail disappeared.
   Sad Pinocchio on the beach, sadly looking at the sea. He wondered if he would ever see Geppetto again.

Suddenly he saw Geppetto, who sailed out to sea in search of Pinocchio. Geppetto didn't see the huge whale behind him. The whale swallowed Geppetto and his boat.
 Pinocchio knew he needed to save Geppetto. He jumped into the water and swam with all his might.
  As he approached, the whale opened its mouth and Pinocchio walked straight in.
   Deep inside the whale's belly, Pinocchio and Geppetto hugged each other, happy to be together again.

- We need to find a way out - said Gepeto - we will make a fire with the wood from my boat.

The smoke made the whale sneeze. They left the whale's mouth and returned to the sea.
 Pinocchio and Geppetto swam safely to shore. They were both tired. They lay down on the sand and fell asleep.
  When Geppetto woke up, he saw that the blue fairy, as a reward for being so brave, had transformed Pinocchio into a real boy.

- Finally my wish came true!
Pinocchio

shouted Geppetto.

Once upon a time there was a carver named Geppetto.
 He made puppets out of pieces of wood and called his favorite puppet Pinocchio.

- I would love to be the father of a real boy like Pinocchio - he wished.

That night, the blue fairy, who knew that Geppetto was a good man, cast a spell on Pinocchio.
 The next day, Gappetto woke up and was very happy to discover that Pinocchio could walk, sit and talk like a real boy.

Geppetto wanted to send Pinocchio to school. He sold his only coat for a spelling book.

- Now you can go to school like a real boy - help Gappetto as we wave to Pinocchio.

 
On the way to school, Pinocchio stopped to watch a puppet show in a town.

- Would you like to participate in my puppet show? - asked the evil puppet master.

Pinocchio happily agreed. He was locked inside the evil puppet master's caravan.
 He wished he was safe with Geppetto. The blue fairy suddenly appeared.
  She listened to Pinocchio's desire and freed him. Pinocchio is happy to be free.

- I'm going straight to school - he said.

But he met an evil fox who told him about a wonderful place called Fun Island.
 Pinocchio completely forgot about school and gave the fox his spelling book in exchange for a ticket to Fun Island.

- Where are you going, Pinocchio? - asked the fairy b.

- I'm going to school - Pinocchio lied.

Pinocchio's nose became very, very long.
 He wishes he hadn't lied. The fairy called a bird to peck her long nose because Pinocchio was very sorry.
  Pinocchio promised never to be naughty again and went straight to school.

At school, Pinocchio told his friend all about Fun Island.
 His friend wanted to go with him. Pinocchio and his companions boarded a ship heading to Fun Island.
  On the island, they did not know that boys were turned into donkeys and used for very hard work.

Pinocchio cried and wished he hadn't come to the island.
 He also wished he didn't look like a silly ass.
  The blue fairy heard his wish and with a wave of her magic wand his donkey ears and tail disappeared.
   Sad Pinocchio on the beach, sadly looking at the sea. He wondered if he would ever see Geppetto again.

Suddenly he saw Geppetto, who sailed out to sea in search of Pinocchio. Geppetto didn't see the huge whale behind him. The whale swallowed Geppetto and his boat.
 Pinocchio knew he needed to save Geppetto. He jumped into the water and swam with all his might.
  As he approached, the whale opened its mouth and Pinocchio walked straight in.
   Deep inside the whale's belly, Pinocchio and Geppetto hugged each other, happy to be together again.

- We need to find a way out - said Gepeto - we will make a fire with the wood from my boat.

The smoke made the whale sneeze. They left the whale's mouth and returned to the sea.
 Pinocchio and Geppetto swam safely to shore. They were both tired. They lay down on the sand and fell asleep.
  When Geppetto woke up, he saw that the blue fairy, as a reward for being so brave, had transformed Pinocchio into a real boy.

- Finally my wish came true!
Pinocchio

shouted Geppetto.

Once upon a time there was a carver named Geppetto.
 He made puppets out of pieces of wood and called his favorite puppet Pinocchio.

- I would love to be the father of a real boy like Pinocchio - he wished.

That night, the blue fairy, who knew that Geppetto was a good man, cast a spell on Pinocchio.
 The next day, Gappetto woke up and was very happy to discover that Pinocchio could walk, sit and talk like a real boy.

Geppetto wanted to send Pinocchio to school. He sold his only coat for a spelling book.

- Now you can go to school like a real boy - help Gappetto as we wave to Pinocchio.

 
On the way to school, Pinocchio stopped to watch a puppet show in a town.

- Would you like to participate in my puppet show? - asked the evil puppet master.

Pinocchio happily agreed. He was locked inside the evil puppet master's caravan.
 He wished he was safe with Geppetto. The blue fairy suddenly appeared.
  She listened to Pinocchio's desire and freed him. Pinocchio is happy to be free.

- I'm going straight to school - he said.

But he met an evil fox who told him about a wonderful place called Fun Island.
 Pinocchio completely forgot about school and gave the fox his spelling book in exchange for a ticket to Fun Island.

- Where are you going, Pinocchio? - asked the fairy b.

- I'm going to school - Pinocchio lied.

Pinocchio's nose became very, very long.
 He wishes he hadn't lied. The fairy called a bird to peck her long nose because Pinocchio was very sorry.
  Pinocchio promised never to be naughty again and went straight to school.

At school, Pinocchio told his friend all about Fun Island.
 His friend wanted to go with him. Pinocchio and his companions boarded a ship heading to Fun Island.
  On the island, they did not know that boys were turned into donkeys and used for very hard work.

Pinocchio cried and wished he hadn't come to the island.
 He also wished he didn't look like a silly ass.
  The blue fairy heard his wish and with a wave of her magic wand his donkey ears and tail disappeared.
   Sad Pinocchio on the beach, sadly looking at the sea. He wondered if he would ever see Geppetto again.

Suddenly he saw Geppetto, who sailed out to sea in search of Pinocchio. Geppetto didn't see the huge whale behind him. The whale swallowed Geppetto and his boat.
 Pinocchio knew he needed to save Geppetto. He jumped into the water and swam with all his might.
  As he approached, the whale opened its mouth and Pinocchio walked straight in.
   Deep inside the whale's belly, Pinocchio and Geppetto hugged each other, happy to be together again.

- We need to find a way out - said Gepeto - we will make a fire with the wood from my boat.

The smoke made the whale sneeze. They left the whale's mouth and returned to the sea.
 Pinocchio and Geppetto swam safely to shore. They were both tired. They lay down on the sand and fell asleep.
  When Geppetto woke up, he saw that the blue fairy, as a reward for being so brave, had transformed Pinocchio into a real boy.

- Finally my wish came true!
Pinocchio

shouted Geppetto.

Once upon a time there was a carver named Geppetto.
 He made puppets out of pieces of wood and called his favorite puppet Pinocchio.

- I would love to be the father of a real boy like Pinocchio - he wished.

That night, the blue fairy, who knew that Geppetto was a good man, cast a spell on Pinocchio.
 The next day, Gappetto woke up and was very happy to discover that Pinocchio could walk, sit and talk like a real boy.

Geppetto wanted to send Pinocchio to school. He sold his only coat for a spelling book.

- Now you can go to school like a real boy - help Gappetto as we wave to Pinocchio.

 
On the way to school, Pinocchio stopped to watch a puppet show in a town.

- Would you like to participate in my puppet show? - asked the evil puppet master.

Pinocchio happily agreed. He was locked inside the evil puppet master's caravan.
 He wished he was safe with Geppetto. The blue fairy suddenly appeared.
  She listened to Pinocchio's desire and freed him. Pinocchio is happy to be free.

- I'm going straight to school - he said.

But he met an evil fox who told him about a wonderful place called Fun Island.
 Pinocchio completely forgot about school and gave the fox his spelling book in exchange for a ticket to Fun Island.

- Where are you going, Pinocchio? - asked the fairy b.

- I'm going to school - Pinocchio lied.

Pinocchio's nose became very, very long.
 He wishes he hadn't lied. The fairy called a bird to peck her long nose because Pinocchio was very sorry.
  Pinocchio promised never to be naughty again and went straight to school.

At school, Pinocchio told his friend all about Fun Island.
 His friend wanted to go with him. Pinocchio and his companions boarded a ship heading to Fun Island.
  On the island, they did not know that boys were turned into donkeys and used for very hard work.

Pinocchio cried and wished he hadn't come to the island.
 He also wished he didn't look like a silly ass.
  The blue fairy heard his wish and with a wave of her magic wand his donkey ears and tail disappeared.
   Sad Pinocchio on the beach, sadly looking at the sea. He wondered if he would ever see Geppetto again.

Suddenly he saw Geppetto, who sailed out to sea in search of Pinocchio. Geppetto didn't see the huge whale behind him. The whale swallowed Geppetto and his boat.
 Pinocchio knew he needed to save Geppetto. He jumped into the water and swam with all his might.
  As he approached, the whale opened its mouth and Pinocchio walked straight in.
   Deep inside the whale's belly, Pinocchio and Geppetto hugged each other, happy to be together again.

- We need to find a way out - said Gepeto - we will make a fire with the wood from my boat.

The smoke made the whale sneeze. They left the whale's mouth and returned to the sea.
 Pinocchio and Geppetto swam safely to shore. They were both tired. They lay down on the sand and fell asleep.
  When Geppetto woke up, he saw that the blue fairy, as a reward for being so brave, had transformed Pinocchio into a real boy.

- Finally my wish came true!
Pinocchio

shouted Geppetto.

Once upon a time there was a carver named Geppetto.
 He made puppets out of pieces of wood and called his favorite puppet Pinocchio.

- I would love to be the father of a real boy like Pinocchio - he wished.

That night, the blue fairy, who knew that Geppetto was a good man, cast a spell on Pinocchio.
 The next day, Gappetto woke up and was very happy to discover that Pinocchio could walk, sit and talk like a real boy.

Geppetto wanted to send Pinocchio to school. He sold his only coat for a spelling book.

- Now you can go to school like a real boy - help Gappetto as we wave to Pinocchio.

 
On the way to school, Pinocchio stopped to watch a puppet show in a town.

- Would you like to participate in my puppet show? - asked the evil puppet master.

Pinocchio happily agreed. He was locked inside the evil puppet master's caravan.
 He wished he was safe with Geppetto. The blue fairy suddenly appeared.
  She listened to Pinocchio's desire and freed him. Pinocchio is happy to be free.

- I'm going straight to school - he said.

But he met an evil fox who told him about a wonderful place called Fun Island.
 Pinocchio completely forgot about school and gave the fox his spelling book in exchange for a ticket to Fun Island.

- Where are you going, Pinocchio? - asked the fairy b.

- I'm going to school - Pinocchio lied.

Pinocchio's nose became very, very long.
 He wishes he hadn't lied. The fairy called a bird to peck her long nose because Pinocchio was very sorry.
  Pinocchio promised never to be naughty again and went straight to school.

At school, Pinocchio told his friend all about Fun Island.
 His friend wanted to go with him. Pinocchio and his companions boarded a ship heading to Fun Island.
  On the island, they did not know that boys were turned into donkeys and used for very hard work.

Pinocchio cried and wished he hadn't come to the island.
 He also wished he didn't look like a silly ass.
  The blue fairy heard his wish and with a wave of her magic wand his donkey ears and tail disappeared.
   Sad Pinocchio on the beach, sadly looking at the sea. He wondered if he would ever see Geppetto again.

Suddenly he saw Geppetto, who sailed out to sea in search of Pinocchio. Geppetto didn't see the huge whale behind him. The whale swallowed Geppetto and his boat.
 Pinocchio knew he needed to save Geppetto. He jumped into the water and swam with all his might.
  As he approached, the whale opened its mouth and Pinocchio walked straight in.
   Deep inside the whale's belly, Pinocchio and Geppetto hugged each other, happy to be together again.

- We need to find a way out - said Gepeto - we will make a fire with the wood from my boat.

The smoke made the whale sneeze. They left the whale's mouth and returned to the sea.
 Pinocchio and Geppetto swam safely to shore. They were both tired. They lay down on the sand and fell asleep.
  When Geppetto woke up, he saw that the blue fairy, as a reward for being so brave, had transformed Pinocchio into a real boy.

- Finally my wish came true!
Pinocchio

shouted Geppetto.

Once upon a time there was a carver named Geppetto.
 He made puppets out of pieces of wood and called his favorite puppet Pinocchio.

- I would love to be the father of a real boy like Pinocchio - he wished.

That night, the blue fairy, who knew that Geppetto was a good man, cast a spell on Pinocchio.
 The next day, Gappetto woke up and was very happy to discover that Pinocchio could walk, sit and talk like a real boy.

Geppetto wanted to send Pinocchio to school. He sold his only coat for a spelling book.

- Now you can go to school like a real boy - help Gappetto as we wave to Pinocchio.

 
On the way to school, Pinocchio stopped to watch a puppet show in a town.

- Would you like to participate in my puppet show? - asked the evil puppet master.

Pinocchio happily agreed. He was locked inside the evil puppet master's caravan.
 He wished he was safe with Geppetto. The blue fairy suddenly appeared.
  She listened to Pinocchio's desire and freed him. Pinocchio is happy to be free.

- I'm going straight to school - he said.

But he met an evil fox who told him about a wonderful place called Fun Island.
 Pinocchio completely forgot about school and gave the fox his spelling book in exchange for a ticket to Fun Island.

- Where are you going, Pinocchio? - asked the fairy b.

- I'm going to school - Pinocchio lied.

Pinocchio's nose became very, very long.
 He wishes he hadn't lied. The fairy called a bird to peck her long nose because Pinocchio was very sorry.
  Pinocchio promised never to be naughty again and went straight to school.

At school, Pinocchio told his friend all about Fun Island.
 His friend wanted to go with him. Pinocchio and his companions boarded a ship heading to Fun Island.
  On the island, they did not know that boys were turned into donkeys and used for very hard work.

Pinocchio cried and wished he hadn't come to the island.
 He also wished he didn't look like a silly ass.
  The blue fairy heard his wish and with a wave of her magic wand his donkey ears and tail disappeared.
   Sad Pinocchio on the beach, sadly looking at the sea. He wondered if he would ever see Geppetto again.

Suddenly he saw Geppetto, who sailed out to sea in search of Pinocchio. Geppetto didn't see the huge whale behind him. The whale swallowed Geppetto and his boat.
 Pinocchio knew he needed to save Geppetto. He jumped into the water and swam with all his might.
  As he approached, the whale opened its mouth and Pinocchio walked straight in.
   Deep inside the whale's belly, Pinocchio and Geppetto hugged each other, happy to be together again.

- We need to find a way out - said Gepeto - we will make a fire with the wood from my boat.

The smoke made the whale sneeze. They left the whale's mouth and returned to the sea.
 Pinocchio and Geppetto swam safely to shore. They were both tired. They lay down on the sand and fell asleep.
  When Geppetto woke up, he saw that the blue fairy, as a reward for being so brave, had transformed Pinocchio into a real boy.

- Finally my wish came true!
Pinocchio

shouted Geppetto.

Once upon a time there was a carver named Geppetto.
 He made puppets out of pieces of wood and called his favorite puppet Pinocchio.

- I would love to be the father of a real boy like Pinocchio - he wished.

That night, the blue fairy, who knew that Geppetto was a good man, cast a spell on Pinocchio.
 The next day, Gappetto woke up and was very happy to discover that Pinocchio could walk, sit and talk like a real boy.

Geppetto wanted to send Pinocchio to school. He sold his only coat for a spelling book.

- Now you can go to school like a real boy - help Gappetto as we wave to Pinocchio.

 
On the way to school, Pinocchio stopped to watch a puppet show in a town.

- Would you like to participate in my puppet show? - asked the evil puppet master.

Pinocchio happily agreed. He was locked inside the evil puppet master's caravan.
 He wished he was safe with Geppetto. The blue fairy suddenly appeared.
  She listened to Pinocchio's desire and freed him. Pinocchio is happy to be free.

- I'm going straight to school - he said.

But he met an evil fox who told him about a wonderful place called Fun Island.
 Pinocchio completely forgot about school and gave the fox his spelling book in exchange for a ticket to Fun Island.

- Where are you going, Pinocchio? - asked the fairy b.

- I'm going to school - Pinocchio lied.

Pinocchio's nose became very, very long.
 He wishes he hadn't lied. The fairy called a bird to peck her long nose because Pinocchio was very sorry.
  Pinocchio promised never to be naughty again and went straight to school.

At school, Pinocchio told his friend all about Fun Island.
 His friend wanted to go with him. Pinocchio and his companions boarded a ship heading to Fun Island.
  On the island, they did not know that boys were turned into donkeys and used for very hard work.

Pinocchio cried and wished he hadn't come to the island.
 He also wished he didn't look like a silly ass.
  The blue fairy heard his wish and with a wave of her magic wand his donkey ears and tail disappeared.
   Sad Pinocchio on the beach, sadly looking at the sea. He wondered if he would ever see Geppetto again.

Suddenly he saw Geppetto, who sailed out to sea in search of Pinocchio. Geppetto didn't see the huge whale behind him. The whale swallowed Geppetto and his boat.
 Pinocchio knew he needed to save Geppetto. He jumped into the water and swam with all his might.
  As he approached, the whale opened its mouth and Pinocchio walked straight in.
   Deep inside the whale's belly, Pinocchio and Geppetto hugged each other, happy to be together again.

- We need to find a way out - said Gepeto - we will make a fire with the wood from my boat.

The smoke made the whale sneeze. They left the whale's mouth and returned to the sea.
 Pinocchio and Geppetto swam safely to shore. They were both tired. They lay down on the sand and fell asleep.
  When Geppetto woke up, he saw that the blue fairy, as a reward for being so brave, had transformed Pinocchio into a real boy.

- Finally my wish came true!
Pinocchio

shouted Geppetto.

Once upon a time there was a carver named Geppetto.
 He made puppets out of pieces of wood and called his favorite puppet Pinocchio.

- I would love to be the father of a real boy like Pinocchio - he wished.

That night, the blue fairy, who knew that Geppetto was a good man, cast a spell on Pinocchio.
 The next day, Gappetto woke up and was very happy to discover that Pinocchio could walk, sit and talk like a real boy.

Geppetto wanted to send Pinocchio to school. He sold his only coat for a spelling book.

- Now you can go to school like a real boy - help Gappetto as we wave to Pinocchio.

 
On the way to school, Pinocchio stopped to watch a puppet show in a town.

- Would you like to participate in my puppet show? - asked the evil puppet master.

Pinocchio happily agreed. He was locked inside the evil puppet master's caravan.
 He wished he was safe with Geppetto. The blue fairy suddenly appeared.
  She listened to Pinocchio's desire and freed him. Pinocchio is happy to be free.

- I'm going straight to school - he said.

But he met an evil fox who told him about a wonderful place called Fun Island.
 Pinocchio completely forgot about school and gave the fox his spelling book in exchange for a ticket to Fun Island.

- Where are you going, Pinocchio? - asked the fairy b.

- I'm going to school - Pinocchio lied.

Pinocchio's nose became very, very long.
 He wishes he hadn't lied. The fairy called a bird to peck her long nose because Pinocchio was very sorry.
  Pinocchio promised never to be naughty again and went straight to school.

At school, Pinocchio told his friend all about Fun Island.
 His friend wanted to go with him. Pinocchio and his companions boarded a ship heading to Fun Island.
  On the island, they did not know that boys were turned into donkeys and used for very hard work.

Pinocchio cried and wished he hadn't come to the island.
 He also wished he didn't look like a silly ass.
  The blue fairy heard his wish and with a wave of her magic wand his donkey ears and tail disappeared.
   Sad Pinocchio on the beach, sadly looking at the sea. He wondered if he would ever see Geppetto again.

Suddenly he saw Geppetto, who sailed out to sea in search of Pinocchio. Geppetto didn't see the huge whale behind him. The whale swallowed Geppetto and his boat.
 Pinocchio knew he needed to save Geppetto. He jumped into the water and swam with all his might.
  As he approached, the whale opened its mouth and Pinocchio walked straight in.
   Deep inside the whale's belly, Pinocchio and Geppetto hugged each other, happy to be together again.

- We need to find a way out - said Gepeto - we will make a fire with the wood from my boat.

The smoke made the whale sneeze. They left the whale's mouth and returned to the sea.
 Pinocchio and Geppetto swam safely to shore. They were both tired. They lay down on the sand and fell asleep.
  When Geppetto woke up, he saw that the blue fairy, as a reward for being so brave, had transformed Pinocchio into a real boy.

- Finally my wish came true!
Pinocchio

shouted Geppetto.

Once upon a time there was a carver named Geppetto.
 He made puppets out of pieces of wood and called his favorite puppet Pinocchio.

- I would love to be the father of a real boy like Pinocchio - he wished.

That night, the blue fairy, who knew that Geppetto was a good man, cast a spell on Pinocchio.
 The next day, Gappetto woke up and was very happy to discover that Pinocchio could walk, sit and talk like a real boy.

Geppetto wanted to send Pinocchio to school. He sold his only coat for a spelling book.

- Now you can go to school like a real boy - help Gappetto as we wave to Pinocchio.

 
On the way to school, Pinocchio stopped to watch a puppet show in a town.

- Would you like to participate in my puppet show? - asked the evil puppet master.

Pinocchio happily agreed. He was locked inside the evil puppet master's caravan.
 He wished he was safe with Geppetto. The blue fairy suddenly appeared.
  She listened to Pinocchio's desire and freed him. Pinocchio is happy to be free.

- I'm going straight to school - he said.

But he met an evil fox who told him about a wonderful place called Fun Island.
 Pinocchio completely forgot about school and gave the fox his spelling book in exchange for a ticket to Fun Island.

- Where are you going, Pinocchio? - asked the fairy b.

- I'm going to school - Pinocchio lied.

Pinocchio's nose became very, very long.
 He wishes he hadn't lied. The fairy called a bird to peck her long nose because Pinocchio was very sorry.
  Pinocchio promised never to be naughty again and went straight to school.

At school, Pinocchio told his friend all about Fun Island.
 His friend wanted to go with him. Pinocchio and his companions boarded a ship heading to Fun Island.
  On the island, they did not know that boys were turned into donkeys and used for very hard work.

Pinocchio cried and wished he hadn't come to the island.
 He also wished he didn't look like a silly ass.
  The blue fairy heard his wish and with a wave of her magic wand his donkey ears and tail disappeared.
   Sad Pinocchio on the beach, sadly looking at the sea. He wondered if he would ever see Geppetto again.

Suddenly he saw Geppetto, who sailed out to sea in search of Pinocchio. Geppetto didn't see the huge whale behind him. The whale swallowed Geppetto and his boat.
 Pinocchio knew he needed to save Geppetto. He jumped into the water and swam with all his might.
  As he approached, the whale opened its mouth and Pinocchio walked straight in.
   Deep inside the whale's belly, Pinocchio and Geppetto hugged each other, happy to be together again.

- We need to find a way out - said Gepeto - we will make a fire with the wood from my boat.

The smoke made the whale sneeze. They left the whale's mouth and returned to the sea.
 Pinocchio and Geppetto swam safely to shore. They were both tired. They lay down on the sand and fell asleep.
  When Geppetto woke up, he saw that the blue fairy, as a reward for being so brave, had transformed Pinocchio into a real boy.

- Finally my wish came true!
Pinocchio

shouted Geppetto.

Once upon a time there was a carver named Geppetto.
 He made puppets out of pieces of wood and called his favorite puppet Pinocchio.

- I would love to be the father of a real boy like Pinocchio - he wished.

That night, the blue fairy, who knew that Geppetto was a good man, cast a spell on Pinocchio.
 The next day, Gappetto woke up and was very happy to discover that Pinocchio could walk, sit and talk like a real boy.

Geppetto wanted to send Pinocchio to school. He sold his only coat for a spelling book.

- Now you can go to school like a real boy - help Gappetto as we wave to Pinocchio.

 
On the way to school, Pinocchio stopped to watch a puppet show in a town.

- Would you like to participate in my puppet show? - asked the evil puppet master.

Pinocchio happily agreed. He was locked inside the evil puppet master's caravan.
 He wished he was safe with Geppetto. The blue fairy suddenly appeared.
  She listened to Pinocchio's desire and freed him. Pinocchio is happy to be free.

- I'm going straight to school - he said.

But he met an evil fox who told him about a wonderful place called Fun Island.
 Pinocchio completely forgot about school and gave the fox his spelling book in exchange for a ticket to Fun Island.

- Where are you going, Pinocchio? - asked the fairy b.

- I'm going to school - Pinocchio lied.

Pinocchio's nose became very, very long.
 He wishes he hadn't lied. The fairy called a bird to peck her long nose because Pinocchio was very sorry.
  Pinocchio promised never to be naughty again and went straight to school.

At school, Pinocchio told his friend all about Fun Island.
 His friend wanted to go with him. Pinocchio and his companions boarded a ship heading to Fun Island.
  On the island, they did not know that boys were turned into donkeys and used for very hard work.

Pinocchio cried and wished he hadn't come to the island.
 He also wished he didn't look like a silly ass.
  The blue fairy heard his wish and with a wave of her magic wand his donkey ears and tail disappeared.
   Sad Pinocchio on the beach, sadly looking at the sea. He wondered if he would ever see Geppetto again.

Suddenly he saw Geppetto, who sailed out to sea in search of Pinocchio. Geppetto didn't see the huge whale behind him. The whale swallowed Geppetto and his boat.
 Pinocchio knew he needed to save Geppetto. He jumped into the water and swam with all his might.
  As he approached, the whale opened its mouth and Pinocchio walked straight in.
   Deep inside the whale's belly, Pinocchio and Geppetto hugged each other, happy to be together again.

- We need to find a way out - said Gepeto - we will make a fire with the wood from my boat.

The smoke made the whale sneeze. They left the whale's mouth and returned to the sea.
 Pinocchio and Geppetto swam safely to shore. They were both tired. They lay down on the sand and fell asleep.
  When Geppetto woke up, he saw that the blue fairy, as a reward for being so brave, had transformed Pinocchio into a real boy.

- Finally my wish came true!
Pinocchio

shouted Geppetto.

Once upon a time there was a carver named Geppetto.
 He made puppets out of pieces of wood and called his favorite puppet Pinocchio.

- I would love to be the father of a real boy like Pinocchio - he wished.

That night, the blue fairy, who knew that Geppetto was a good man, cast a spell on Pinocchio.
 The next day, Gappetto woke up and was very happy to discover that Pinocchio could walk, sit and talk like a real boy.

Geppetto wanted to send Pinocchio to school. He sold his only coat for a spelling book.

- Now you can go to school like a real boy - help Gappetto as we wave to Pinocchio.

 
On the way to school, Pinocchio stopped to watch a puppet show in a town.

- Would you like to participate in my puppet show? - asked the evil puppet master.

Pinocchio happily agreed. He was locked inside the evil puppet master's caravan.
 He wished he was safe with Geppetto. The blue fairy suddenly appeared.
  She listened to Pinocchio's desire and freed him. Pinocchio is happy to be free.

- I'm going straight to school - he said.

But he met an evil fox who told him about a wonderful place called Fun Island.
 Pinocchio completely forgot about school and gave the fox his spelling book in exchange for a ticket to Fun Island.

- Where are you going, Pinocchio? - asked the fairy b.

- I'm going to school - Pinocchio lied.

Pinocchio's nose became very, very long.
 He wishes he hadn't lied. The fairy called a bird to peck her long nose because Pinocchio was very sorry.
  Pinocchio promised never to be naughty again and went straight to school.

At school, Pinocchio told his friend all about Fun Island.
 His friend wanted to go with him. Pinocchio and his companions boarded a ship heading to Fun Island.
  On the island, they did not know that boys were turned into donkeys and used for very hard work.

Pinocchio cried and wished he hadn't come to the island.
 He also wished he didn't look like a silly ass.
  The blue fairy heard his wish and with a wave of her magic wand his donkey ears and tail disappeared.
   Sad Pinocchio on the beach, sadly looking at the sea. He wondered if he would ever see Geppetto again.

Suddenly he saw Geppetto, who sailed out to sea in search of Pinocchio. Geppetto didn't see the huge whale behind him. The whale swallowed Geppetto and his boat.
 Pinocchio knew he needed to save Geppetto. He jumped into the water and swam with all his might.
  As he approached, the whale opened its mouth and Pinocchio walked straight in.
   Deep inside the whale's belly, Pinocchio and Geppetto hugged each other, happy to be together again.

- We need to find a way out - said Gepeto - we will make a fire with the wood from my boat.

The smoke made the whale sneeze. They left the whale's mouth and returned to the sea.
 Pinocchio and Geppetto swam safely to shore. They were both tired. They lay down on the sand and fell asleep.
  When Geppetto woke up, he saw that the blue fairy, as a reward for being so brave, had transformed Pinocchio into a real boy.

- Finally my wish came true!
Pinocchio

shouted Geppetto.

Once upon a time there was a carver named Geppetto.
 He made puppets out of pieces of wood and called his favorite puppet Pinocchio.

- I would love to be the father of a real boy like Pinocchio - he wished.

That night, the blue fairy, who knew that Geppetto was a good man, cast a spell on Pinocchio.
 The next day, Gappetto woke up and was very happy to discover that Pinocchio could walk, sit and talk like a real boy.

Geppetto wanted to send Pinocchio to school. He sold his only coat for a spelling book.

- Now you can go to school like a real boy - help Gappetto as we wave to Pinocchio.

 
On the way to school, Pinocchio stopped to watch a puppet show in a town.

- Would you like to participate in my puppet show? - asked the evil puppet master.

Pinocchio happily agreed. He was locked inside the evil puppet master's caravan.
 He wished he was safe with Geppetto. The blue fairy suddenly appeared.
  She listened to Pinocchio's desire and freed him. Pinocchio is happy to be free.

- I'm going straight to school - he said.

But he met an evil fox who told him about a wonderful place called Fun Island.
 Pinocchio completely forgot about school and gave the fox his spelling book in exchange for a ticket to Fun Island.

- Where are you going, Pinocchio? - asked the fairy b.

- I'm going to school - Pinocchio lied.

Pinocchio's nose became very, very long.
 He wishes he hadn't lied. The fairy called a bird to peck her long nose because Pinocchio was very sorry.
  Pinocchio promised never to be naughty again and went straight to school.

At school, Pinocchio told his friend all about Fun Island.
 His friend wanted to go with him. Pinocchio and his companions boarded a ship heading to Fun Island.
  On the island, they did not know that boys were turned into donkeys and used for very hard work.

Pinocchio cried and wished he hadn't come to the island.
 He also wished he didn't look like a silly ass.
  The blue fairy heard his wish and with a wave of her magic wand his donkey ears and tail disappeared.
   Sad Pinocchio on the beach, sadly looking at the sea. He wondered if he would ever see Geppetto again.

Suddenly he saw Geppetto, who sailed out to sea in search of Pinocchio. Geppetto didn't see the huge whale behind him. The whale swallowed Geppetto and his boat.
 Pinocchio knew he needed to save Geppetto. He jumped into the water and swam with all his might.
  As he approached, the whale opened its mouth and Pinocchio walked straight in.
   Deep inside the whale's belly, Pinocchio and Geppetto hugged each other, happy to be together again.

- We need to find a way out - said Gepeto - we will make a fire with the wood from my boat.

The smoke made the whale sneeze. They left the whale's mouth and returned to the sea.
 Pinocchio and Geppetto swam safely to shore. They were both tired. They lay down on the sand and fell asleep.
  When Geppetto woke up, he saw that the blue fairy, as a reward for being so brave, had transformed Pinocchio into a real boy.

- Finally my wish came true!
Pinocchio

shouted Geppetto.

Once upon a time there was a carver named Geppetto.
 He made puppets out of pieces of wood and called his favorite puppet Pinocchio.

- I would love to be the father of a real boy like Pinocchio - he wished.

That night, the blue fairy, who knew that Geppetto was a good man, cast a spell on Pinocchio.
 The next day, Gappetto woke up and was very happy to discover that Pinocchio could walk, sit and talk like a real boy.

Geppetto wanted to send Pinocchio to school. He sold his only coat for a spelling book.

- Now you can go to school like a real boy - help Gappetto as we wave to Pinocchio.

 
On the way to school, Pinocchio stopped to watch a puppet show in a town.

- Would you like to participate in my puppet show? - asked the evil puppet master.

Pinocchio happily agreed. He was locked inside the evil puppet master's caravan.
 He wished he was safe with Geppetto. The blue fairy suddenly appeared.
  She listened to Pinocchio's desire and freed him. Pinocchio is happy to be free.

- I'm going straight to school - he said.

But he met an evil fox who told him about a wonderful place called Fun Island.
 Pinocchio completely forgot about school and gave the fox his spelling book in exchange for a ticket to Fun Island.

- Where are you going, Pinocchio? - asked the fairy b.

- I'm going to school - Pinocchio lied.

Pinocchio's nose became very, very long.
 He wishes he hadn't lied. The fairy called a bird to peck her long nose because Pinocchio was very sorry.
  Pinocchio promised never to be naughty again and went straight to school.

At school, Pinocchio told his friend all about Fun Island.
 His friend wanted to go with him. Pinocchio and his companions boarded a ship heading to Fun Island.
  On the island, they did not know that boys were turned into donkeys and used for very hard work.

Pinocchio cried and wished he hadn't come to the island.
 He also wished he didn't look like a silly ass.
  The blue fairy heard his wish and with a wave of her magic wand his donkey ears and tail disappeared.
   Sad Pinocchio on the beach, sadly looking at the sea. He wondered if he would ever see Geppetto again.

Suddenly he saw Geppetto, who sailed out to sea in search of Pinocchio. Geppetto didn't see the huge whale behind him. The whale swallowed Geppetto and his boat.
 Pinocchio knew he needed to save Geppetto. He jumped into the water and swam with all his might.
  As he approached, the whale opened its mouth and Pinocchio walked straight in.
   Deep inside the whale's belly, Pinocchio and Geppetto hugged each other, happy to be together again.

- We need to find a way out - said Gepeto - we will make a fire with the wood from my boat.

The smoke made the whale sneeze. They left the whale's mouth and returned to the sea.
 Pinocchio and Geppetto swam safely to shore. They were both tired. They lay down on the sand and fell asleep.
  When Geppetto woke up, he saw that the blue fairy, as a reward for being so brave, had transformed Pinocchio into a real boy.

- Finally my wish came true!
Pinocchio

shouted Geppetto.

Once upon a time there was a carver named Geppetto.
 He made puppets out of pieces of wood and called his favorite puppet Pinocchio.

- I would love to be the father of a real boy like Pinocchio - he wished.

That night, the blue fairy, who knew that Geppetto was a good man, cast a spell on Pinocchio.
 The next day, Gappetto woke up and was very happy to discover that Pinocchio could walk, sit and talk like a real boy.

Geppetto wanted to send Pinocchio to school. He sold his only coat for a spelling book.

- Now you can go to school like a real boy - help Gappetto as we wave to Pinocchio.

 
On the way to school, Pinocchio stopped to watch a puppet show in a town.

- Would you like to participate in my puppet show? - asked the evil puppet master.

Pinocchio happily agreed. He was locked inside the evil puppet master's caravan.
 He wished he was safe with Geppetto. The blue fairy suddenly appeared.
  She listened to Pinocchio's desire and freed him. Pinocchio is happy to be free.

- I'm going straight to school - he said.

But he met an evil fox who told him about a wonderful place called Fun Island.
 Pinocchio completely forgot about school and gave the fox his spelling book in exchange for a ticket to Fun Island.

- Where are you going, Pinocchio? - asked the fairy b.

- I'm going to school - Pinocchio lied.

Pinocchio's nose became very, very long.
 He wishes he hadn't lied. The fairy called a bird to peck her long nose because Pinocchio was very sorry.
  Pinocchio promised never to be naughty again and went straight to school.

At school, Pinocchio told his friend all about Fun Island.
 His friend wanted to go with him. Pinocchio and his companions boarded a ship heading to Fun Island.
  On the island, they did not know that boys were turned into donkeys and used for very hard work.

Pinocchio cried and wished he hadn't come to the island.
 He also wished he didn't look like a silly ass.
  The blue fairy heard his wish and with a wave of her magic wand his donkey ears and tail disappeared.
   Sad Pinocchio on the beach, sadly looking at the sea. He wondered if he would ever see Geppetto again.

Suddenly he saw Geppetto, who sailed out to sea in search of Pinocchio. Geppetto didn't see the huge whale behind him. The whale swallowed Geppetto and his boat.
 Pinocchio knew he needed to save Geppetto. He jumped into the water and swam with all his might.
  As he approached, the whale opened its mouth and Pinocchio walked straight in.
   Deep inside the whale's belly, Pinocchio and Geppetto hugged each other, happy to be together again.

- We need to find a way out - said Gepeto - we will make a fire with the wood from my boat.

The smoke made the whale sneeze. They left the whale's mouth and returned to the sea.
 Pinocchio and Geppetto swam safely to shore. They were both tired. They lay down on the sand and fell asleep.
  When Geppetto woke up, he saw that the blue fairy, as a reward for being so brave, had transformed Pinocchio into a real boy.

- Finally my wish came true!
Pinocchio

shouted Geppetto.

Once upon a time there was a carver named Geppetto.
 He made puppets out of pieces of wood and called his favorite puppet Pinocchio.

- I would love to be the father of a real boy like Pinocchio - he wished.

That night, the blue fairy, who knew that Geppetto was a good man, cast a spell on Pinocchio.
 The next day, Gappetto woke up and was very happy to discover that Pinocchio could walk, sit and talk like a real boy.

Geppetto wanted to send Pinocchio to school. He sold his only coat for a spelling book.

- Now you can go to school like a real boy - help Gappetto as we wave to Pinocchio.

 
On the way to school, Pinocchio stopped to watch a puppet show in a town.

- Would you like to participate in my puppet show? - asked the evil puppet master.

Pinocchio happily agreed. He was locked inside the evil puppet master's caravan.
 He wished he was safe with Geppetto. The blue fairy suddenly appeared.
  She listened to Pinocchio's desire and freed him. Pinocchio is happy to be free.

- I'm going straight to school - he said.

But he met an evil fox who told him about a wonderful place called Fun Island.
 Pinocchio completely forgot about school and gave the fox his spelling book in exchange for a ticket to Fun Island.

- Where are you going, Pinocchio? - asked the fairy b.

- I'm going to school - Pinocchio lied.

Pinocchio's nose became very, very long.
 He wishes he hadn't lied. The fairy called a bird to peck her long nose because Pinocchio was very sorry.
  Pinocchio promised never to be naughty again and went straight to school.

At school, Pinocchio told his friend all about Fun Island.
 His friend wanted to go with him. Pinocchio and his companions boarded a ship heading to Fun Island.
  On the island, they did not know that boys were turned into donkeys and used for very hard work.

Pinocchio cried and wished he hadn't come to the island.
 He also wished he didn't look like a silly ass.
  The blue fairy heard his wish and with a wave of her magic wand his donkey ears and tail disappeared.
   Sad Pinocchio on the beach, sadly looking at the sea. He wondered if he would ever see Geppetto again.

Suddenly he saw Geppetto, who sailed out to sea in search of Pinocchio. Geppetto didn't see the huge whale behind him. The whale swallowed Geppetto and his boat.
 Pinocchio knew he needed to save Geppetto. He jumped into the water and swam with all his might.
  As he approached, the whale opened its mouth and Pinocchio walked straight in.
   Deep inside the whale's belly, Pinocchio and Geppetto hugged each other, happy to be together again.

- We need to find a way out - said Gepeto - we will make a fire with the wood from my boat.

The smoke made the whale sneeze. They left the whale's mouth and returned to the sea.
 Pinocchio and Geppetto swam safely to shore. They were both tired. They lay down on the sand and fell asleep.
  When Geppetto woke up, he saw that the blue fairy, as a reward for being so brave, had transformed Pinocchio into a real boy.

- Finally my wish came true!
Pinocchio

shouted Geppetto.

Once upon a time there was a carver named Geppetto.
 He made puppets out of pieces of wood and called his favorite puppet Pinocchio.

- I would love to be the father of a real boy like Pinocchio - he wished.

That night, the blue fairy, who knew that Geppetto was a good man, cast a spell on Pinocchio.
 The next day, Gappetto woke up and was very happy to discover that Pinocchio could walk, sit and talk like a real boy.

Geppetto wanted to send Pinocchio to school. He sold his only coat for a spelling book.

- Now you can go to school like a real boy - help Gappetto as we wave to Pinocchio.

 
On the way to school, Pinocchio stopped to watch a puppet show in a town.

- Would you like to participate in my puppet show? - asked the evil puppet master.

Pinocchio happily agreed. He was locked inside the evil puppet master's caravan.
 He wished he was safe with Geppetto. The blue fairy suddenly appeared.
  She listened to Pinocchio's desire and freed him. Pinocchio is happy to be free.

- I'm going straight to school - he said.

But he met an evil fox who told him about a wonderful place called Fun Island.
 Pinocchio completely forgot about school and gave the fox his spelling book in exchange for a ticket to Fun Island.

- Where are you going, Pinocchio? - asked the fairy b.

- I'm going to school - Pinocchio lied.

Pinocchio's nose became very, very long.
 He wishes he hadn't lied. The fairy called a bird to peck her long nose because Pinocchio was very sorry.
  Pinocchio promised never to be naughty again and went straight to school.

At school, Pinocchio told his friend all about Fun Island.
 His friend wanted to go with him. Pinocchio and his companions boarded a ship heading to Fun Island.
  On the island, they did not know that boys were turned into donkeys and used for very hard work.

Pinocchio cried and wished he hadn't come to the island.
 He also wished he didn't look like a silly ass.
  The blue fairy heard his wish and with a wave of her magic wand his donkey ears and tail disappeared.
   Sad Pinocchio on the beach, sadly looking at the sea. He wondered if he would ever see Geppetto again.

Suddenly he saw Geppetto, who sailed out to sea in search of Pinocchio. Geppetto didn't see the huge whale behind him. The whale swallowed Geppetto and his boat.
 Pinocchio knew he needed to save Geppetto. He jumped into the water and swam with all his might.
  As he approached, the whale opened its mouth and Pinocchio walked straight in.
   Deep inside the whale's belly, Pinocchio and Geppetto hugged each other, happy to be together again.

- We need to find a way out - said Gepeto - we will make a fire with the wood from my boat.

The smoke made the whale sneeze. They left the whale's mouth and returned to the sea.
 Pinocchio and Geppetto swam safely to shore. They were both tired. They lay down on the sand and fell asleep.
  When Geppetto woke up, he saw that the blue fairy, as a reward for being so brave, had transformed Pinocchio into a real boy.

- Finally my wish came true!
Pinocchio

shouted Geppetto.

Once upon a time there was a carver named Geppetto.
 He made puppets out of pieces of wood and called his favorite puppet Pinocchio.

- I would love to be the father of a real boy like Pinocchio - he wished.

That night, the blue fairy, who knew that Geppetto was a good man, cast a spell on Pinocchio.
 The next day, Gappetto woke up and was very happy to discover that Pinocchio could walk, sit and talk like a real boy.

Geppetto wanted to send Pinocchio to school. He sold his only coat for a spelling book.

- Now you can go to school like a real boy - help Gappetto as we wave to Pinocchio.

 
On the way to school, Pinocchio stopped to watch a puppet show in a town.

- Would you like to participate in my puppet show? - asked the evil puppet master.

Pinocchio happily agreed. He was locked inside the evil puppet master's caravan.
 He wished he was safe with Geppetto. The blue fairy suddenly appeared.
  She listened to Pinocchio's desire and freed him. Pinocchio is happy to be free.

- I'm going straight to school - he said.

But he met an evil fox who told him about a wonderful place called Fun Island.
 Pinocchio completely forgot about school and gave the fox his spelling book in exchange for a ticket to Fun Island.

- Where are you going, Pinocchio? - asked the fairy b.

- I'm going to school - Pinocchio lied.

Pinocchio's nose became very, very long.
 He wishes he hadn't lied. The fairy called a bird to peck her long nose because Pinocchio was very sorry.
  Pinocchio promised never to be naughty again and went straight to school.

At school, Pinocchio told his friend all about Fun Island.
 His friend wanted to go with him. Pinocchio and his companions boarded a ship heading to Fun Island.
  On the island, they did not know that boys were turned into donkeys and used for very hard work.

Pinocchio cried and wished he hadn't come to the island.
 He also wished he didn't look like a silly ass.
  The blue fairy heard his wish and with a wave of her magic wand his donkey ears and tail disappeared.
   Sad Pinocchio on the beach, sadly looking at the sea. He wondered if he would ever see Geppetto again.

Suddenly he saw Geppetto, who sailed out to sea in search of Pinocchio. Geppetto didn't see the huge whale behind him. The whale swallowed Geppetto and his boat.
 Pinocchio knew he needed to save Geppetto. He jumped into the water and swam with all his might.
  As he approached, the whale opened its mouth and Pinocchio walked straight in.
   Deep inside the whale's belly, Pinocchio and Geppetto hugged each other, happy to be together again.

- We need to find a way out - said Gepeto - we will make a fire with the wood from my boat.

The smoke made the whale sneeze. They left the whale's mouth and returned to the sea.
 Pinocchio and Geppetto swam safely to shore. They were both tired. They lay down on the sand and fell asleep.
  When Geppetto woke up, he saw that the blue fairy, as a reward for being so brave, had transformed Pinocchio into a real boy.

- Finally my wish came true!
Pinocchio

shouted Geppetto.

Once upon a time there was a carver named Geppetto.
 He made puppets out of pieces of wood and called his favorite puppet Pinocchio.

- I would love to be the father of a real boy like Pinocchio - he wished.

That night, the blue fairy, who knew that Geppetto was a good man, cast a spell on Pinocchio.
 The next day, Gappetto woke up and was very happy to discover that Pinocchio could walk, sit and talk like a real boy.

Geppetto wanted to send Pinocchio to school. He sold his only coat for a spelling book.

- Now you can go to school like a real boy - help Gappetto as we wave to Pinocchio.

 
On the way to school, Pinocchio stopped to watch a puppet show in a town.

- Would you like to participate in my puppet show? - asked the evil puppet master.

Pinocchio happily agreed. He was locked inside the evil puppet master's caravan.
 He wished he was safe with Geppetto. The blue fairy suddenly appeared.
  She listened to Pinocchio's desire and freed him. Pinocchio is happy to be free.

- I'm going straight to school - he said.

But he met an evil fox who told him about a wonderful place called Fun Island.
 Pinocchio completely forgot about school and gave the fox his spelling book in exchange for a ticket to Fun Island.

- Where are you going, Pinocchio? - asked the fairy b.

- I'm going to school - Pinocchio lied.

Pinocchio's nose became very, very long.
 He wishes he hadn't lied. The fairy called a bird to peck her long nose because Pinocchio was very sorry.
  Pinocchio promised never to be naughty again and went straight to school.

At school, Pinocchio told his friend all about Fun Island.
 His friend wanted to go with him. Pinocchio and his companions boarded a ship heading to Fun Island.
  On the island, they did not know that boys were turned into donkeys and used for very hard work.

Pinocchio cried and wished he hadn't come to the island.
 He also wished he didn't look like a silly ass.
  The blue fairy heard his wish and with a wave of her magic wand his donkey ears and tail disappeared.
   Sad Pinocchio on the beach, sadly looking at the sea. He wondered if he would ever see Geppetto again.

Suddenly he saw Geppetto, who sailed out to sea in search of Pinocchio. Geppetto didn't see the huge whale behind him. The whale swallowed Geppetto and his boat.
 Pinocchio knew he needed to save Geppetto. He jumped into the water and swam with all his might.
  As he approached, the whale opened its mouth and Pinocchio walked straight in.
   Deep inside the whale's belly, Pinocchio and Geppetto hugged each other, happy to be together again.

- We need to find a way out - said Gepeto - we will make a fire with the wood from my boat.

The smoke made the whale sneeze. They left the whale's mouth and returned to the sea.
 Pinocchio and Geppetto swam safely to shore. They were both tired. They lay down on the sand and fell asleep.
  When Geppetto woke up, he saw that the blue fairy, as a reward for being so brave, had transformed Pinocchio into a real boy.

- Finally my wish came true!
Pinocchio

shouted Geppetto.

Once upon a time there was a carver named Geppetto.
 He made puppets out of pieces of wood and called his favorite puppet Pinocchio.

- I would love to be the father of a real boy like Pinocchio - he wished.

That night, the blue fairy, who knew that Geppetto was a good man, cast a spell on Pinocchio.
 The next day, Gappetto woke up and was very happy to discover that Pinocchio could walk, sit and talk like a real boy.

Geppetto wanted to send Pinocchio to school. He sold his only coat for a spelling book.

- Now you can go to school like a real boy - help Gappetto as we wave to Pinocchio.

 
On the way to school, Pinocchio stopped to watch a puppet show in a town.

- Would you like to participate in my puppet show? - asked the evil puppet master.

Pinocchio happily agreed. He was locked inside the evil puppet master's caravan.
 He wished he was safe with Geppetto. The blue fairy suddenly appeared.
  She listened to Pinocchio's desire and freed him. Pinocchio is happy to be free.

- I'm going straight to school - he said.

But he met an evil fox who told him about a wonderful place called Fun Island.
 Pinocchio completely forgot about school and gave the fox his spelling book in exchange for a ticket to Fun Island.

- Where are you going, Pinocchio? - asked the fairy b.

- I'm going to school - Pinocchio lied.

Pinocchio's nose became very, very long.
 He wishes he hadn't lied. The fairy called a bird to peck her long nose because Pinocchio was very sorry.
  Pinocchio promised never to be naughty again and went straight to school.

At school, Pinocchio told his friend all about Fun Island.
 His friend wanted to go with him. Pinocchio and his companions boarded a ship heading to Fun Island.
  On the island, they did not know that boys were turned into donkeys and used for very hard work.

Pinocchio cried and wished he hadn't come to the island.
 He also wished he didn't look like a silly ass.
  The blue fairy heard his wish and with a wave of her magic wand his donkey ears and tail disappeared.
   Sad Pinocchio on the beach, sadly looking at the sea. He wondered if he would ever see Geppetto again.

Suddenly he saw Geppetto, who sailed out to sea in search of Pinocchio. Geppetto didn't see the huge whale behind him. The whale swallowed Geppetto and his boat.
 Pinocchio knew he needed to save Geppetto. He jumped into the water and swam with all his might.
  As he approached, the whale opened its mouth and Pinocchio walked straight in.
   Deep inside the whale's belly, Pinocchio and Geppetto hugged each other, happy to be together again.

- We need to find a way out - said Gepeto - we will make a fire with the wood from my boat.

The smoke made the whale sneeze. They left the whale's mouth and returned to the sea.
 Pinocchio and Geppetto swam safely to shore. They were both tired. They lay down on the sand and fell asleep.
  When Geppetto woke up, he saw that the blue fairy, as a reward for being so brave, had transformed Pinocchio into a real boy.

- Finally my wish came true!
Pinocchio

shouted Geppetto.

Once upon a time there was a carver named Geppetto.
 He made puppets out of pieces of wood and called his favorite puppet Pinocchio.

- I would love to be the father of a real boy like Pinocchio - he wished.

That night, the blue fairy, who knew that Geppetto was a good man, cast a spell on Pinocchio.
 The next day, Gappetto woke up and was very happy to discover that Pinocchio could walk, sit and talk like a real boy.

Geppetto wanted to send Pinocchio to school. He sold his only coat for a spelling book.

- Now you can go to school like a real boy - help Gappetto as we wave to Pinocchio.

 
On the way to school, Pinocchio stopped to watch a puppet show in a town.

- Would you like to participate in my puppet show? - asked the evil puppet master.

Pinocchio happily agreed. He was locked inside the evil puppet master's caravan.
 He wished he was safe with Geppetto. The blue fairy suddenly appeared.
  She listened to Pinocchio's desire and freed him. Pinocchio is happy to be free.

- I'm going straight to school - he said.

But he met an evil fox who told him about a wonderful place called Fun Island.
 Pinocchio completely forgot about school and gave the fox his spelling book in exchange for a ticket to Fun Island.

- Where are you going, Pinocchio? - asked the fairy b.

- I'm going to school - Pinocchio lied.

Pinocchio's nose became very, very long.
 He wishes he hadn't lied. The fairy called a bird to peck her long nose because Pinocchio was very sorry.
  Pinocchio promised never to be naughty again and went straight to school.

At school, Pinocchio told his friend all about Fun Island.
 His friend wanted to go with him. Pinocchio and his companions boarded a ship heading to Fun Island.
  On the island, they did not know that boys were turned into donkeys and used for very hard work.

Pinocchio cried and wished he hadn't come to the island.
 He also wished he didn't look like a silly ass.
  The blue fairy heard his wish and with a wave of her magic wand his donkey ears and tail disappeared.
   Sad Pinocchio on the beach, sadly looking at the sea. He wondered if he would ever see Geppetto again.

Suddenly he saw Geppetto, who sailed out to sea in search of Pinocchio. Geppetto didn't see the huge whale behind him. The whale swallowed Geppetto and his boat.
 Pinocchio knew he needed to save Geppetto. He jumped into the water and swam with all his might.
  As he approached, the whale opened its mouth and Pinocchio walked straight in.
   Deep inside the whale's belly, Pinocchio and Geppetto hugged each other, happy to be together again.

- We need to find a way out - said Gepeto - we will make a fire with the wood from my boat.

The smoke made the whale sneeze. They left the whale's mouth and returned to the sea.
 Pinocchio and Geppetto swam safely to shore. They were both tired. They lay down on the sand and fell asleep.
  When Geppetto woke up, he saw that the blue fairy, as a reward for being so brave, had transformed Pinocchio into a real boy.

- Finally my wish came true!
Pinocchio

shouted Geppetto.

Once upon a time there was a carver named Geppetto.
 He made puppets out of pieces of wood and called his favorite puppet Pinocchio.

- I would love to be the father of a real boy like Pinocchio - he wished.

That night, the blue fairy, who knew that Geppetto was a good man, cast a spell on Pinocchio.
 The next day, Gappetto woke up and was very happy to discover that Pinocchio could walk, sit and talk like a real boy.

Geppetto wanted to send Pinocchio to school. He sold his only coat for a spelling book.

- Now you can go to school like a real boy - help Gappetto as we wave to Pinocchio.

 
On the way to school, Pinocchio stopped to watch a puppet show in a town.

- Would you like to participate in my puppet show? - asked the evil puppet master.

Pinocchio happily agreed. He was locked inside the evil puppet master's caravan.
 He wished he was safe with Geppetto. The blue fairy suddenly appeared.
  She listened to Pinocchio's desire and freed him. Pinocchio is happy to be free.

- I'm going straight to school - he said.

But he met an evil fox who told him about a wonderful place called Fun Island.
 Pinocchio completely forgot about school and gave the fox his spelling book in exchange for a ticket to Fun Island.

- Where are you going, Pinocchio? - asked the fairy b.

- I'm going to school - Pinocchio lied.

Pinocchio's nose became very, very long.
 He wishes he hadn't lied. The fairy called a bird to peck her long nose because Pinocchio was very sorry.
  Pinocchio promised never to be naughty again and went straight to school.

At school, Pinocchio told his friend all about Fun Island.
 His friend wanted to go with him. Pinocchio and his companions boarded a ship heading to Fun Island.
  On the island, they did not know that boys were turned into donkeys and used for very hard work.

Pinocchio cried and wished he hadn't come to the island.
 He also wished he didn't look like a silly ass.
  The blue fairy heard his wish and with a wave of her magic wand his donkey ears and tail disappeared.
   Sad Pinocchio on the beach, sadly looking at the sea. He wondered if he would ever see Geppetto again.

Suddenly he saw Geppetto, who sailed out to sea in search of Pinocchio. Geppetto didn't see the huge whale behind him. The whale swallowed Geppetto and his boat.
 Pinocchio knew he needed to save Geppetto. He jumped into the water and swam with all his might.
  As he approached, the whale opened its mouth and Pinocchio walked straight in.
   Deep inside the whale's belly, Pinocchio and Geppetto hugged each other, happy to be together again.

- We need to find a way out - said Gepeto - we will make a fire with the wood from my boat.

The smoke made the whale sneeze. They left the whale's mouth and returned to the sea.
 Pinocchio and Geppetto swam safely to shore. They were both tired. They lay down on the sand and fell asleep.
  When Geppetto woke up, he saw that the blue fairy, as a reward for being so brave, had transformed Pinocchio into a real boy.

- Finally my wish came true!
Pinocchio

shouted Geppetto.

Once upon a time there was a carver named Geppetto.
 He made puppets out of pieces of wood and called his favorite puppet Pinocchio.

- I would love to be the father of a real boy like Pinocchio - he wished.

That night, the blue fairy, who knew that Geppetto was a good man, cast a spell on Pinocchio.
 The next day, Gappetto woke up and was very happy to discover that Pinocchio could walk, sit and talk like a real boy.

Geppetto wanted to send Pinocchio to school. He sold his only coat for a spelling book.

- Now you can go to school like a real boy - help Gappetto as we wave to Pinocchio.

 
On the way to school, Pinocchio stopped to watch a puppet show in a town.

- Would you like to participate in my puppet show? - asked the evil puppet master.

Pinocchio happily agreed. He was locked inside the evil puppet master's caravan.
 He wished he was safe with Geppetto. The blue fairy suddenly appeared.
  She listened to Pinocchio's desire and freed him. Pinocchio is happy to be free.

- I'm going straight to school - he said.

But he met an evil fox who told him about a wonderful place called Fun Island.
 Pinocchio completely forgot about school and gave the fox his spelling book in exchange for a ticket to Fun Island.

- Where are you going, Pinocchio? - asked the fairy b.

- I'm going to school - Pinocchio lied.

Pinocchio's nose became very, very long.
 He wishes he hadn't lied. The fairy called a bird to peck her long nose because Pinocchio was very sorry.
  Pinocchio promised never to be naughty again and went straight to school.

At school, Pinocchio told his friend all about Fun Island.
 His friend wanted to go with him. Pinocchio and his companions boarded a ship heading to Fun Island.
  On the island, they did not know that boys were turned into donkeys and used for very hard work.

Pinocchio cried and wished he hadn't come to the island.
 He also wished he didn't look like a silly ass.
  The blue fairy heard his wish and with a wave of her magic wand his donkey ears and tail disappeared.
   Sad Pinocchio on the beach, sadly looking at the sea. He wondered if he would ever see Geppetto again.

Suddenly he saw Geppetto, who sailed out to sea in search of Pinocchio. Geppetto didn't see the huge whale behind him. The whale swallowed Geppetto and his boat.
 Pinocchio knew he needed to save Geppetto. He jumped into the water and swam with all his might.
  As he approached, the whale opened its mouth and Pinocchio walked straight in.
   Deep inside the whale's belly, Pinocchio and Geppetto hugged each other, happy to be together again.

- We need to find a way out - said Gepeto - we will make a fire with the wood from my boat.

The smoke made the whale sneeze. They left the whale's mouth and returned to the sea.
 Pinocchio and Geppetto swam safely to shore. They were both tired. They lay down on the sand and fell asleep.
  When Geppetto woke up, he saw that the blue fairy, as a reward for being so brave, had transformed Pinocchio into a real boy.

- Finally my wish came true!
Pinocchio

shouted Geppetto.

Once upon a time there was a carver named Geppetto.
 He made puppets out of pieces of wood and called his favorite puppet Pinocchio.

- I would love to be the father of a real boy like Pinocchio - he wished.

That night, the blue fairy, who knew that Geppetto was a good man, cast a spell on Pinocchio.
 The next day, Gappetto woke up and was very happy to discover that Pinocchio could walk, sit and talk like a real boy.

Geppetto wanted to send Pinocchio to school. He sold his only coat for a spelling book.

- Now you can go to school like a real boy - help Gappetto as we wave to Pinocchio.

 
On the way to school, Pinocchio stopped to watch a puppet show in a town.

- Would you like to participate in my puppet show? - asked the evil puppet master.

Pinocchio happily agreed. He was locked inside the evil puppet master's caravan.
 He wished he was safe with Geppetto. The blue fairy suddenly appeared.
  She listened to Pinocchio's desire and freed him. Pinocchio is happy to be free.

- I'm going straight to school - he said.

But he met an evil fox who told him about a wonderful place called Fun Island.
 Pinocchio completely forgot about school and gave the fox his spelling book in exchange for a ticket to Fun Island.

- Where are you going, Pinocchio? - asked the fairy b.

- I'm going to school - Pinocchio lied.

Pinocchio's nose became very, very long.
 He wishes he hadn't lied. The fairy called a bird to peck her long nose because Pinocchio was very sorry.
  Pinocchio promised never to be naughty again and went straight to school.

At school, Pinocchio told his friend all about Fun Island.
 His friend wanted to go with him. Pinocchio and his companions boarded a ship heading to Fun Island.
  On the island, they did not know that boys were turned into donkeys and used for very hard work.

Pinocchio cried and wished he hadn't come to the island.
 He also wished he didn't look like a silly ass.
  The blue fairy heard his wish and with a wave of her magic wand his donkey ears and tail disappeared.
   Sad Pinocchio on the beach, sadly looking at the sea. He wondered if he would ever see Geppetto again.

Suddenly he saw Geppetto, who sailed out to sea in search of Pinocchio. Geppetto didn't see the huge whale behind him. The whale swallowed Geppetto and his boat.
 Pinocchio knew he needed to save Geppetto. He jumped into the water and swam with all his might.
  As he approached, the whale opened its mouth and Pinocchio walked straight in.
   Deep inside the whale's belly, Pinocchio and Geppetto hugged each other, happy to be together again.

- We need to find a way out - said Gepeto - we will make a fire with the wood from my boat.

The smoke made the whale sneeze. They left the whale's mouth and returned to the sea.
 Pinocchio and Geppetto swam safely to shore. They were both tired. They lay down on the sand and fell asleep.
  When Geppetto woke up, he saw that the blue fairy, as a reward for being so brave, had transformed Pinocchio into a real boy.

- Finally my wish came true!
Pinocchio

shouted Geppetto.

Once upon a time there was a carver named Geppetto.
 He made puppets out of pieces of wood and called his favorite puppet Pinocchio.

- I would love to be the father of a real boy like Pinocchio - he wished.

That night, the blue fairy, who knew that Geppetto was a good man, cast a spell on Pinocchio.
 The next day, Gappetto woke up and was very happy to discover that Pinocchio could walk, sit and talk like a real boy.

Geppetto wanted to send Pinocchio to school. He sold his only coat for a spelling book.

- Now you can go to school like a real boy - help Gappetto as we wave to Pinocchio.

 
On the way to school, Pinocchio stopped to watch a puppet show in a town.

- Would you like to participate in my puppet show? - asked the evil puppet master.

Pinocchio happily agreed. He was locked inside the evil puppet master's caravan.
 He wished he was safe with Geppetto. The blue fairy suddenly appeared.
  She listened to Pinocchio's desire and freed him. Pinocchio is happy to be free.

- I'm going straight to school - he said.

But he met an evil fox who told him about a wonderful place called Fun Island.
 Pinocchio completely forgot about school and gave the fox his spelling book in exchange for a ticket to Fun Island.

- Where are you going, Pinocchio? - asked the fairy b.

- I'm going to school - Pinocchio lied.

Pinocchio's nose became very, very long.
 He wishes he hadn't lied. The fairy called a bird to peck her long nose because Pinocchio was very sorry.
  Pinocchio promised never to be naughty again and went straight to school.

At school, Pinocchio told his friend all about Fun Island.
 His friend wanted to go with him. Pinocchio and his companions boarded a ship heading to Fun Island.
  On the island, they did not know that boys were turned into donkeys and used for very hard work.

Pinocchio cried and wished he hadn't come to the island.
 He also wished he didn't look like a silly ass.
  The blue fairy heard his wish and with a wave of her magic wand his donkey ears and tail disappeared.
   Sad Pinocchio on the beach, sadly looking at the sea. He wondered if he would ever see Geppetto again.

Suddenly he saw Geppetto, who sailed out to sea in search of Pinocchio. Geppetto didn't see the huge whale behind him. The whale swallowed Geppetto and his boat.
 Pinocchio knew he needed to save Geppetto. He jumped into the water and swam with all his might.
  As he approached, the whale opened its mouth and Pinocchio walked straight in.
   Deep inside the whale's belly, Pinocchio and Geppetto hugged each other, happy to be together again.

- We need to find a way out - said Gepeto - we will make a fire with the wood from my boat.

The smoke made the whale sneeze. They left the whale's mouth and returned to the sea.
 Pinocchio and Geppetto swam safely to shore. They were both tired. They lay down on the sand and fell asleep.
  When Geppetto woke up, he saw that the blue fairy, as a reward for being so brave, had transformed Pinocchio into a real boy.

- Finally my wish came true!
Pinocchio

shouted Geppetto.

Once upon a time there was a carver named Geppetto.
 He made puppets out of pieces of wood and called his favorite puppet Pinocchio.

- I would love to be the father of a real boy like Pinocchio - he wished.

That night, the blue fairy, who knew that Geppetto was a good man, cast a spell on Pinocchio.
 The next day, Gappetto woke up and was very happy to discover that Pinocchio could walk, sit and talk like a real boy.

Geppetto wanted to send Pinocchio to school. He sold his only coat for a spelling book.

- Now you can go to school like a real boy - help Gappetto as we wave to Pinocchio.

 
On the way to school, Pinocchio stopped to watch a puppet show in a town.

- Would you like to participate in my puppet show? - asked the evil puppet master.

Pinocchio happily agreed. He was locked inside the evil puppet master's caravan.
 He wished he was safe with Geppetto. The blue fairy suddenly appeared.
  She listened to Pinocchio's desire and freed him. Pinocchio is happy to be free.

- I'm going straight to school - he said.

But he met an evil fox who told him about a wonderful place called Fun Island.
 Pinocchio completely forgot about school and gave the fox his spelling book in exchange for a ticket to Fun Island.

- Where are you going, Pinocchio? - asked the fairy b.

- I'm going to school - Pinocchio lied.

Pinocchio's nose became very, very long.
 He wishes he hadn't lied. The fairy called a bird to peck her long nose because Pinocchio was very sorry.
  Pinocchio promised never to be naughty again and went straight to school.

At school, Pinocchio told his friend all about Fun Island.
 His friend wanted to go with him. Pinocchio and his companions boarded a ship heading to Fun Island.
  On the island, they did not know that boys were turned into donkeys and used for very hard work.

Pinocchio cried and wished he hadn't come to the island.
 He also wished he didn't look like a silly ass.
  The blue fairy heard his wish and with a wave of her magic wand his donkey ears and tail disappeared.
   Sad Pinocchio on the beach, sadly looking at the sea. He wondered if he would ever see Geppetto again.

Suddenly he saw Geppetto, who sailed out to sea in search of Pinocchio. Geppetto didn't see the huge whale behind him. The whale swallowed Geppetto and his boat.
 Pinocchio knew he needed to save Geppetto. He jumped into the water and swam with all his might.
  As he approached, the whale opened its mouth and Pinocchio walked straight in.
   Deep inside the whale's belly, Pinocchio and Geppetto hugged each other, happy to be together again.

- We need to find a way out - said Gepeto - we will make a fire with the wood from my boat.

The smoke made the whale sneeze. They left the whale's mouth and returned to the sea.
 Pinocchio and Geppetto swam safely to shore. They were both tired. They lay down on the sand and fell asleep.
  When Geppetto woke up, he saw that the blue fairy, as a reward for being so brave, had transformed Pinocchio into a real boy.

- Finally my wish came true!
Pinocchio

shouted Geppetto.

Once upon a time there was a carver named Geppetto.
 He made puppets out of pieces of wood and called his favorite puppet Pinocchio.

- I would love to be the father of a real boy like Pinocchio - he wished.

That night, the blue fairy, who knew that Geppetto was a good man, cast a spell on Pinocchio.
 The next day, Gappetto woke up and was very happy to discover that Pinocchio could walk, sit and talk like a real boy.

Geppetto wanted to send Pinocchio to school. He sold his only coat for a spelling book.

- Now you can go to school like a real boy - help Gappetto as we wave to Pinocchio.

 
On the way to school, Pinocchio stopped to watch a puppet show in a town.

- Would you like to participate in my puppet show? - asked the evil puppet master.

Pinocchio happily agreed. He was locked inside the evil puppet master's caravan.
 He wished he was safe with Geppetto. The blue fairy suddenly appeared.
  She listened to Pinocchio's desire and freed him. Pinocchio is happy to be free.

- I'm going straight to school - he said.

But he met an evil fox who told him about a wonderful place called Fun Island.
 Pinocchio completely forgot about school and gave the fox his spelling book in exchange for a ticket to Fun Island.

- Where are you going, Pinocchio? - asked the fairy b.

- I'm going to school - Pinocchio lied.

Pinocchio's nose became very, very long.
 He wishes he hadn't lied. The fairy called a bird to peck her long nose because Pinocchio was very sorry.
  Pinocchio promised never to be naughty again and went straight to school.

At school, Pinocchio told his friend all about Fun Island.
 His friend wanted to go with him. Pinocchio and his companions boarded a ship heading to Fun Island.
  On the island, they did not know that boys were turned into donkeys and used for very hard work.

Pinocchio cried and wished he hadn't come to the island.
 He also wished he didn't look like a silly ass.
  The blue fairy heard his wish and with a wave of her magic wand his donkey ears and tail disappeared.
   Sad Pinocchio on the beach, sadly looking at the sea. He wondered if he would ever see Geppetto again.

Suddenly he saw Geppetto, who sailed out to sea in search of Pinocchio. Geppetto didn't see the huge whale behind him. The whale swallowed Geppetto and his boat.
 Pinocchio knew he needed to save Geppetto. He jumped into the water and swam with all his might.
  As he approached, the whale opened its mouth and Pinocchio walked straight in.
   Deep inside the whale's belly, Pinocchio and Geppetto hugged each other, happy to be together again.

- We need to find a way out - said Gepeto - we will make a fire with the wood from my boat.

The smoke made the whale sneeze. They left the whale's mouth and returned to the sea.
 Pinocchio and Geppetto swam safely to shore. They were both tired. They lay down on the sand and fell asleep.
  When Geppetto woke up, he saw that the blue fairy, as a reward for being so brave, had transformed Pinocchio into a real boy.

- Finally my wish came true!
Pinocchio

shouted Geppetto.

Once upon a time there was a carver named Geppetto.
 He made puppets out of pieces of wood and called his favorite puppet Pinocchio.

- I would love to be the father of a real boy like Pinocchio - he wished.

That night, the blue fairy, who knew that Geppetto was a good man, cast a spell on Pinocchio.
 The next day, Gappetto woke up and was very happy to discover that Pinocchio could walk, sit and talk like a real boy.

Geppetto wanted to send Pinocchio to school. He sold his only coat for a spelling book.

- Now you can go to school like a real boy - help Gappetto as we wave to Pinocchio.

 
On the way to school, Pinocchio stopped to watch a puppet show in a town.

- Would you like to participate in my puppet show? - asked the evil puppet master.

Pinocchio happily agreed. He was locked inside the evil puppet master's caravan.
 He wished he was safe with Geppetto. The blue fairy suddenly appeared.
  She listened to Pinocchio's desire and freed him. Pinocchio is happy to be free.

- I'm going straight to school - he said.

But he met an evil fox who told him about a wonderful place called Fun Island.
 Pinocchio completely forgot about school and gave the fox his spelling book in exchange for a ticket to Fun Island.

- Where are you going, Pinocchio? - asked the fairy b.

- I'm going to school - Pinocchio lied.

Pinocchio's nose became very, very long.
 He wishes he hadn't lied. The fairy called a bird to peck her long nose because Pinocchio was very sorry.
  Pinocchio promised never to be naughty again and went straight to school.

At school, Pinocchio told his friend all about Fun Island.
 His friend wanted to go with him. Pinocchio and his companions boarded a ship heading to Fun Island.
  On the island, they did not know that boys were turned into donkeys and used for very hard work.

Pinocchio cried and wished he hadn't come to the island.
 He also wished he didn't look like a silly ass.
  The blue fairy heard his wish and with a wave of her magic wand his donkey ears and tail disappeared.
   Sad Pinocchio on the beach, sadly looking at the sea. He wondered if he would ever see Geppetto again.

Suddenly he saw Geppetto, who sailed out to sea in search of Pinocchio. Geppetto didn't see the huge whale behind him. The whale swallowed Geppetto and his boat.
 Pinocchio knew he needed to save Geppetto. He jumped into the water and swam with all his might.
  As he approached, the whale opened its mouth and Pinocchio walked straight in.
   Deep inside the whale's belly, Pinocchio and Geppetto hugged each other, happy to be together again.

- We need to find a way out - said Gepeto - we will make a fire with the wood from my boat.

The smoke made the whale sneeze. They left the whale's mouth and returned to the sea.
 Pinocchio and Geppetto swam safely to shore. They were both tired. They lay down on the sand and fell asleep.
  When Geppetto woke up, he saw that the blue fairy, as a reward for being so brave, had transformed Pinocchio into a real boy.

- Finally my wish came true!
Pinocchio

shouted Geppetto.

Once upon a time there was a carver named Geppetto.
 He made puppets out of pieces of wood and called his favorite puppet Pinocchio.

- I would love to be the father of a real boy like Pinocchio - he wished.

That night, the blue fairy, who knew that Geppetto was a good man, cast a spell on Pinocchio.
 The next day, Gappetto woke up and was very happy to discover that Pinocchio could walk, sit and talk like a real boy.

Geppetto wanted to send Pinocchio to school. He sold his only coat for a spelling book.

- Now you can go to school like a real boy - help Gappetto as we wave to Pinocchio.

 
On the way to school, Pinocchio stopped to watch a puppet show in a town.

- Would you like to participate in my puppet show? - asked the evil puppet master.

Pinocchio happily agreed. He was locked inside the evil puppet master's caravan.
 He wished he was safe with Geppetto. The blue fairy suddenly appeared.
  She listened to Pinocchio's desire and freed him. Pinocchio is happy to be free.

- I'm going straight to school - he said.

But he met an evil fox who told him about a wonderful place called Fun Island.
 Pinocchio completely forgot about school and gave the fox his spelling book in exchange for a ticket to Fun Island.

- Where are you going, Pinocchio? - asked the fairy b.

- I'm going to school - Pinocchio lied.

Pinocchio's nose became very, very long.
 He wishes he hadn't lied. The fairy called a bird to peck her long nose because Pinocchio was very sorry.
  Pinocchio promised never to be naughty again and went straight to school.

At school, Pinocchio told his friend all about Fun Island.
 His friend wanted to go with him. Pinocchio and his companions boarded a ship heading to Fun Island.
  On the island, they did not know that boys were turned into donkeys and used for very hard work.

Pinocchio cried and wished he hadn't come to the island.
 He also wished he didn't look like a silly ass.
  The blue fairy heard his wish and with a wave of her magic wand his donkey ears and tail disappeared.
   Sad Pinocchio on the beach, sadly looking at the sea. He wondered if he would ever see Geppetto again.

Suddenly he saw Geppetto, who sailed out to sea in search of Pinocchio. Geppetto didn't see the huge whale behind him. The whale swallowed Geppetto and his boat.
 Pinocchio knew he needed to save Geppetto. He jumped into the water and swam with all his might.
  As he approached, the whale opened its mouth and Pinocchio walked straight in.
   Deep inside the whale's belly, Pinocchio and Geppetto hugged each other, happy to be together again.

- We need to find a way out - said Gepeto - we will make a fire with the wood from my boat.

The smoke made the whale sneeze. They left the whale's mouth and returned to the sea.
 Pinocchio and Geppetto swam safely to shore. They were both tired. They lay down on the sand and fell asleep.
  When Geppetto woke up, he saw that the blue fairy, as a reward for being so brave, had transformed Pinocchio into a real boy.

- Finally my wish came true!
Pinocchio

shouted Geppetto.

Once upon a time there was a carver named Geppetto.
 He made puppets out of pieces of wood and called his favorite puppet Pinocchio.

- I would love to be the father of a real boy like Pinocchio - he wished.

That night, the blue fairy, who knew that Geppetto was a good man, cast a spell on Pinocchio.
 The next day, Gappetto woke up and was very happy to discover that Pinocchio could walk, sit and talk like a real boy.

Geppetto wanted to send Pinocchio to school. He sold his only coat for a spelling book.

- Now you can go to school like a real boy - help Gappetto as we wave to Pinocchio.

 
On the way to school, Pinocchio stopped to watch a puppet show in a town.

- Would you like to participate in my puppet show? - asked the evil puppet master.

Pinocchio happily agreed. He was locked inside the evil puppet master's caravan.
 He wished he was safe with Geppetto. The blue fairy suddenly appeared.
  She listened to Pinocchio's desire and freed him. Pinocchio is happy to be free.

- I'm going straight to school - he said.

But he met an evil fox who told him about a wonderful place called Fun Island.
 Pinocchio completely forgot about school and gave the fox his spelling book in exchange for a ticket to Fun Island.

- Where are you going, Pinocchio? - asked the fairy b.

- I'm going to school - Pinocchio lied.

Pinocchio's nose became very, very long.
 He wishes he hadn't lied. The fairy called a bird to peck her long nose because Pinocchio was very sorry.
  Pinocchio promised never to be naughty again and went straight to school.

At school, Pinocchio told his friend all about Fun Island.
 His friend wanted to go with him. Pinocchio and his companions boarded a ship heading to Fun Island.
  On the island, they did not know that boys were turned into donkeys and used for very hard work.

Pinocchio cried and wished he hadn't come to the island.
 He also wished he didn't look like a silly ass.
  The blue fairy heard his wish and with a wave of her magic wand his donkey ears and tail disappeared.
   Sad Pinocchio on the beach, sadly looking at the sea. He wondered if he would ever see Geppetto again.

Suddenly he saw Geppetto, who sailed out to sea in search of Pinocchio. Geppetto didn't see the huge whale behind him. The whale swallowed Geppetto and his boat.
 Pinocchio knew he needed to save Geppetto. He jumped into the water and swam with all his might.
  As he approached, the whale opened its mouth and Pinocchio walked straight in.
   Deep inside the whale's belly, Pinocchio and Geppetto hugged each other, happy to be together again.

- We need to find a way out - said Gepeto - we will make a fire with the wood from my boat.

The smoke made the whale sneeze. They left the whale's mouth and returned to the sea.
 Pinocchio and Geppetto swam safely to shore. They were both tired. They lay down on the sand and fell asleep.
  When Geppetto woke up, he saw that the blue fairy, as a reward for being so brave, had transformed Pinocchio into a real boy.

- Finally my wish came true!
Pinocchio

shouted Geppetto.

Once upon a time there was a carver named Geppetto.
 He made puppets out of pieces of wood and called his favorite puppet Pinocchio.

- I would love to be the father of a real boy like Pinocchio - he wished.

That night, the blue fairy, who knew that Geppetto was a good man, cast a spell on Pinocchio.
 The next day, Gappetto woke up and was very happy to discover that Pinocchio could walk, sit and talk like a real boy.

Geppetto wanted to send Pinocchio to school. He sold his only coat for a spelling book.

- Now you can go to school like a real boy - help Gappetto as we wave to Pinocchio.

 
On the way to school, Pinocchio stopped to watch a puppet show in a town.

- Would you like to participate in my puppet show? - asked the evil puppet master.

Pinocchio happily agreed. He was locked inside the evil puppet master's caravan.
 He wished he was safe with Geppetto. The blue fairy suddenly appeared.
  She listened to Pinocchio's desire and freed him. Pinocchio is happy to be free.

- I'm going straight to school - he said.

But he met an evil fox who told him about a wonderful place called Fun Island.
 Pinocchio completely forgot about school and gave the fox his spelling book in exchange for a ticket to Fun Island.

- Where are you going, Pinocchio? - asked the fairy b.

- I'm going to school - Pinocchio lied.

Pinocchio's nose became very, very long.
 He wishes he hadn't lied. The fairy called a bird to peck her long nose because Pinocchio was very sorry.
  Pinocchio promised never to be naughty again and went straight to school.

At school, Pinocchio told his friend all about Fun Island.
 His friend wanted to go with him. Pinocchio and his companions boarded a ship heading to Fun Island.
  On the island, they did not know that boys were turned into donkeys and used for very hard work.

Pinocchio cried and wished he hadn't come to the island.
 He also wished he didn't look like a silly ass.
  The blue fairy heard his wish and with a wave of her magic wand his donkey ears and tail disappeared.
   Sad Pinocchio on the beach, sadly looking at the sea. He wondered if he would ever see Geppetto again.

Suddenly he saw Geppetto, who sailed out to sea in search of Pinocchio. Geppetto didn't see the huge whale behind him. The whale swallowed Geppetto and his boat.
 Pinocchio knew he needed to save Geppetto. He jumped into the water and swam with all his might.
  As he approached, the whale opened its mouth and Pinocchio walked straight in.
   Deep inside the whale's belly, Pinocchio and Geppetto hugged each other, happy to be together again.

- We need to find a way out - said Gepeto - we will make a fire with the wood from my boat.

The smoke made the whale sneeze. They left the whale's mouth and returned to the sea.
 Pinocchio and Geppetto swam safely to shore. They were both tired. They lay down on the sand and fell asleep.
  When Geppetto woke up, he saw that the blue fairy, as a reward for being so brave, had transformed Pinocchio into a real boy.

- Finally my wish came true!
Pinocchio

shouted Geppetto.

Once upon a time there was a carver named Geppetto.
 He made puppets out of pieces of wood and called his favorite puppet Pinocchio.

- I would love to be the father of a real boy like Pinocchio - he wished.

That night, the blue fairy, who knew that Geppetto was a good man, cast a spell on Pinocchio.
 The next day, Gappetto woke up and was very happy to discover that Pinocchio could walk, sit and talk like a real boy.

Geppetto wanted to send Pinocchio to school. He sold his only coat for a spelling book.

- Now you can go to school like a real boy - help Gappetto as we wave to Pinocchio.

 
On the way to school, Pinocchio stopped to watch a puppet show in a town.

- Would you like to participate in my puppet show? - asked the evil puppet master.

Pinocchio happily agreed. He was locked inside the evil puppet master's caravan.
 He wished he was safe with Geppetto. The blue fairy suddenly appeared.
  She listened to Pinocchio's desire and freed him. Pinocchio is happy to be free.

- I'm going straight to school - he said.

But he met an evil fox who told him about a wonderful place called Fun Island.
 Pinocchio completely forgot about school and gave the fox his spelling book in exchange for a ticket to Fun Island.

- Where are you going, Pinocchio? - asked the fairy b.

- I'm going to school - Pinocchio lied.

Pinocchio's nose became very, very long.
 He wishes he hadn't lied. The fairy called a bird to peck her long nose because Pinocchio was very sorry.
  Pinocchio promised never to be naughty again and went straight to school.

At school, Pinocchio told his friend all about Fun Island.
 His friend wanted to go with him. Pinocchio and his companions boarded a ship heading to Fun Island.
  On the island, they did not know that boys were turned into donkeys and used for very hard work.

Pinocchio cried and wished he hadn't come to the island.
 He also wished he didn't look like a silly ass.
  The blue fairy heard his wish and with a wave of her magic wand his donkey ears and tail disappeared.
   Sad Pinocchio on the beach, sadly looking at the sea. He wondered if he would ever see Geppetto again.

Suddenly he saw Geppetto, who sailed out to sea in search of Pinocchio. Geppetto didn't see the huge whale behind him. The whale swallowed Geppetto and his boat.
 Pinocchio knew he needed to save Geppetto. He jumped into the water and swam with all his might.
  As he approached, the whale opened its mouth and Pinocchio walked straight in.
   Deep inside the whale's belly, Pinocchio and Geppetto hugged each other, happy to be together again.

- We need to find a way out - said Gepeto - we will make a fire with the wood from my boat.

The smoke made the whale sneeze. They left the whale's mouth and returned to the sea.
 Pinocchio and Geppetto swam safely to shore. They were both tired. They lay down on the sand and fell asleep.
  When Geppetto woke up, he saw that the blue fairy, as a reward for being so brave, had transformed Pinocchio into a real boy.

- Finally my wish came true!
Pinocchio

shouted Geppetto.

Once upon a time there was a carver named Geppetto.
 He made puppets out of pieces of wood and called his favorite puppet Pinocchio.

- I would love to be the father of a real boy like Pinocchio - he wished.

That night, the blue fairy, who knew that Geppetto was a good man, cast a spell on Pinocchio.
 The next day, Gappetto woke up and was very happy to discover that Pinocchio could walk, sit and talk like a real boy.

Geppetto wanted to send Pinocchio to school. He sold his only coat for a spelling book.

- Now you can go to school like a real boy - help Gappetto as we wave to Pinocchio.

 
On the way to school, Pinocchio stopped to watch a puppet show in a town.

- Would you like to participate in my puppet show? - asked the evil puppet master.

Pinocchio happily agreed. He was locked inside the evil puppet master's caravan.
 He wished he was safe with Geppetto. The blue fairy suddenly appeared.
  She listened to Pinocchio's desire and freed him. Pinocchio is happy to be free.

- I'm going straight to school - he said.

But he met an evil fox who told him about a wonderful place called Fun Island.
 Pinocchio completely forgot about school and gave the fox his spelling book in exchange for a ticket to Fun Island.

- Where are you going, Pinocchio? - asked the fairy b.

- I'm going to school - Pinocchio lied.

Pinocchio's nose became very, very long.
 He wishes he hadn't lied. The fairy called a bird to peck her long nose because Pinocchio was very sorry.
  Pinocchio promised never to be naughty again and went straight to school.

At school, Pinocchio told his friend all about Fun Island.
 His friend wanted to go with him. Pinocchio and his companions boarded a ship heading to Fun Island.
  On the island, they did not know that boys were turned into donkeys and used for very hard work.

Pinocchio cried and wished he hadn't come to the island.
 He also wished he didn't look like a silly ass.
  The blue fairy heard his wish and with a wave of her magic wand his donkey ears and tail disappeared.
   Sad Pinocchio on the beach, sadly looking at the sea. He wondered if he would ever see Geppetto again.

Suddenly he saw Geppetto, who sailed out to sea in search of Pinocchio. Geppetto didn't see the huge whale behind him. The whale swallowed Geppetto and his boat.
 Pinocchio knew he needed to save Geppetto. He jumped into the water and swam with all his might.
  As he approached, the whale opened its mouth and Pinocchio walked straight in.
   Deep inside the whale's belly, Pinocchio and Geppetto hugged each other, happy to be together again.

- We need to find a way out - said Gepeto - we will make a fire with the wood from my boat.

The smoke made the whale sneeze. They left the whale's mouth and returned to the sea.
 Pinocchio and Geppetto swam safely to shore. They were both tired. They lay down on the sand and fell asleep.
  When Geppetto woke up, he saw that the blue fairy, as a reward for being so brave, had transformed Pinocchio into a real boy.

- Finally my wish came true!
Pinocchio

shouted Geppetto.

Once upon a time there was a carver named Geppetto.
 He made puppets out of pieces of wood and called his favorite puppet Pinocchio.

- I would love to be the father of a real boy like Pinocchio - he wished.

That night, the blue fairy, who knew that Geppetto was a good man, cast a spell on Pinocchio.
 The next day, Gappetto woke up and was very happy to discover that Pinocchio could walk, sit and talk like a real boy.

Geppetto wanted to send Pinocchio to school. He sold his only coat for a spelling book.

- Now you can go to school like a real boy - help Gappetto as we wave to Pinocchio.

 
On the way to school, Pinocchio stopped to watch a puppet show in a town.

- Would you like to participate in my puppet show? - asked the evil puppet master.

Pinocchio happily agreed. He was locked inside the evil puppet master's caravan.
 He wished he was safe with Geppetto. The blue fairy suddenly appeared.
  She listened to Pinocchio's desire and freed him. Pinocchio is happy to be free.

- I'm going straight to school - he said.

But he met an evil fox who told him about a wonderful place called Fun Island.
 Pinocchio completely forgot about school and gave the fox his spelling book in exchange for a ticket to Fun Island.

- Where are you going, Pinocchio? - asked the fairy b.

- I'm going to school - Pinocchio lied.

Pinocchio's nose became very, very long.
 He wishes he hadn't lied. The fairy called a bird to peck her long nose because Pinocchio was very sorry.
  Pinocchio promised never to be naughty again and went straight to school.

At school, Pinocchio told his friend all about Fun Island.
 His friend wanted to go with him. Pinocchio and his companions boarded a ship heading to Fun Island.
  On the island, they did not know that boys were turned into donkeys and used for very hard work.

Pinocchio cried and wished he hadn't come to the island.
 He also wished he didn't look like a silly ass.
  The blue fairy heard his wish and with a wave of her magic wand his donkey ears and tail disappeared.
   Sad Pinocchio on the beach, sadly looking at the sea. He wondered if he would ever see Geppetto again.

Suddenly he saw Geppetto, who sailed out to sea in search of Pinocchio. Geppetto didn't see the huge whale behind him. The whale swallowed Geppetto and his boat.
 Pinocchio knew he needed to save Geppetto. He jumped into the water and swam with all his might.
  As he approached, the whale opened its mouth and Pinocchio walked straight in.
   Deep inside the whale's belly, Pinocchio and Geppetto hugged each other, happy to be together again.

- We need to find a way out - said Gepeto - we will make a fire with the wood from my boat.

The smoke made the whale sneeze. They left the whale's mouth and returned to the sea.
 Pinocchio and Geppetto swam safely to shore. They were both tired. They lay down on the sand and fell asleep.
  When Geppetto woke up, he saw that the blue fairy, as a reward for being so brave, had transformed Pinocchio into a real boy.

- Finally my wish came true!
Pinocchio

shouted Geppetto.

Once upon a time there was a carver named Geppetto.
 He made puppets out of pieces of wood and called his favorite puppet Pinocchio.

- I would love to be the father of a real boy like Pinocchio - he wished.

That night, the blue fairy, who knew that Geppetto was a good man, cast a spell on Pinocchio.
 The next day, Gappetto woke up and was very happy to discover that Pinocchio could walk, sit and talk like a real boy.

Geppetto wanted to send Pinocchio to school. He sold his only coat for a spelling book.

- Now you can go to school like a real boy - help Gappetto as we wave to Pinocchio.

 
On the way to school, Pinocchio stopped to watch a puppet show in a town.

- Would you like to participate in my puppet show? - asked the evil puppet master.

Pinocchio happily agreed. He was locked inside the evil puppet master's caravan.
 He wished he was safe with Geppetto. The blue fairy suddenly appeared.
  She listened to Pinocchio's desire and freed him. Pinocchio is happy to be free.

- I'm going straight to school - he said.

But he met an evil fox who told him about a wonderful place called Fun Island.
 Pinocchio completely forgot about school and gave the fox his spelling book in exchange for a ticket to Fun Island.

- Where are you going, Pinocchio? - asked the fairy b.

- I'm going to school - Pinocchio lied.

Pinocchio's nose became very, very long.
 He wishes he hadn't lied. The fairy called a bird to peck her long nose because Pinocchio was very sorry.
  Pinocchio promised never to be naughty again and went straight to school.

At school, Pinocchio told his friend all about Fun Island.
 His friend wanted to go with him. Pinocchio and his companions boarded a ship heading to Fun Island.
  On the island, they did not know that boys were turned into donkeys and used for very hard work.

Pinocchio cried and wished he hadn't come to the island.
 He also wished he didn't look like a silly ass.
  The blue fairy heard his wish and with a wave of her magic wand his donkey ears and tail disappeared.
   Sad Pinocchio on the beach, sadly looking at the sea. He wondered if he would ever see Geppetto again.

Suddenly he saw Geppetto, who sailed out to sea in search of Pinocchio. Geppetto didn't see the huge whale behind him. The whale swallowed Geppetto and his boat.
 Pinocchio knew he needed to save Geppetto. He jumped into the water and swam with all his might.
  As he approached, the whale opened its mouth and Pinocchio walked straight in.
   Deep inside the whale's belly, Pinocchio and Geppetto hugged each other, happy to be together again.

- We need to find a way out - said Gepeto - we will make a fire with the wood from my boat.

The smoke made the whale sneeze. They left the whale's mouth and returned to the sea.
 Pinocchio and Geppetto swam safely to shore. They were both tired. They lay down on the sand and fell asleep.
  When Geppetto woke up, he saw that the blue fairy, as a reward for being so brave, had transformed Pinocchio into a real boy.

- Finally my wish came true!
Pinocchio

shouted Geppetto.

Once upon a time there was a carver named Geppetto.
 He made puppets out of pieces of wood and called his favorite puppet Pinocchio.

- I would love to be the father of a real boy like Pinocchio - he wished.

That night, the blue fairy, who knew that Geppetto was a good man, cast a spell on Pinocchio.
 The next day, Gappetto woke up and was very happy to discover that Pinocchio could walk, sit and talk like a real boy.

Geppetto wanted to send Pinocchio to school. He sold his only coat for a spelling book.

- Now you can go to school like a real boy - help Gappetto as we wave to Pinocchio.

 
On the way to school, Pinocchio stopped to watch a puppet show in a town.

- Would you like to participate in my puppet show? - asked the evil puppet master.

Pinocchio happily agreed. He was locked inside the evil puppet master's caravan.
 He wished he was safe with Geppetto. The blue fairy suddenly appeared.
  She listened to Pinocchio's desire and freed him. Pinocchio is happy to be free.

- I'm going straight to school - he said.

But he met an evil fox who told him about a wonderful place called Fun Island.
 Pinocchio completely forgot about school and gave the fox his spelling book in exchange for a ticket to Fun Island.

- Where are you going, Pinocchio? - asked the fairy b.

- I'm going to school - Pinocchio lied.

Pinocchio's nose became very, very long.
 He wishes he hadn't lied. The fairy called a bird to peck her long nose because Pinocchio was very sorry.
  Pinocchio promised never to be naughty again and went straight to school.

At school, Pinocchio told his friend all about Fun Island.
 His friend wanted to go with him. Pinocchio and his companions boarded a ship heading to Fun Island.
  On the island, they did not know that boys were turned into donkeys and used for very hard work.

Pinocchio cried and wished he hadn't come to the island.
 He also wished he didn't look like a silly ass.
  The blue fairy heard his wish and with a wave of her magic wand his donkey ears and tail disappeared.
   Sad Pinocchio on the beach, sadly looking at the sea. He wondered if he would ever see Geppetto again.

Suddenly he saw Geppetto, who sailed out to sea in search of Pinocchio. Geppetto didn't see the huge whale behind him. The whale swallowed Geppetto and his boat.
 Pinocchio knew he needed to save Geppetto. He jumped into the water and swam with all his might.
  As he approached, the whale opened its mouth and Pinocchio walked straight in.
   Deep inside the whale's belly, Pinocchio and Geppetto hugged each other, happy to be together again.

- We need to find a way out - said Gepeto - we will make a fire with the wood from my boat.

The smoke made the whale sneeze. They left the whale's mouth and returned to the sea.
 Pinocchio and Geppetto swam safely to shore. They were both tired. They lay down on the sand and fell asleep.
  When Geppetto woke up, he saw that the blue fairy, as a reward for being so brave, had transformed Pinocchio into a real boy.

- Finally my wish came true!
Pinocchio

shouted Geppetto.

Once upon a time there was a carver named Geppetto.
 He made puppets out of pieces of wood and called his favorite puppet Pinocchio.

- I would love to be the father of a real boy like Pinocchio - he wished.

That night, the blue fairy, who knew that Geppetto was a good man, cast a spell on Pinocchio.
 The next day, Gappetto woke up and was very happy to discover that Pinocchio could walk, sit and talk like a real boy.

Geppetto wanted to send Pinocchio to school. He sold his only coat for a spelling book.

- Now you can go to school like a real boy - help Gappetto as we wave to Pinocchio.

 
On the way to school, Pinocchio stopped to watch a puppet show in a town.

- Would you like to participate in my puppet show? - asked the evil puppet master.

Pinocchio happily agreed. He was locked inside the evil puppet master's caravan.
 He wished he was safe with Geppetto. The blue fairy suddenly appeared.
  She listened to Pinocchio's desire and freed him. Pinocchio is happy to be free.

- I'm going straight to school - he said.

But he met an evil fox who told him about a wonderful place called Fun Island.
 Pinocchio completely forgot about school and gave the fox his spelling book in exchange for a ticket to Fun Island.

- Where are you going, Pinocchio? - asked the fairy b.

- I'm going to school - Pinocchio lied.

Pinocchio's nose became very, very long.
 He wishes he hadn't lied. The fairy called a bird to peck her long nose because Pinocchio was very sorry.
  Pinocchio promised never to be naughty again and went straight to school.

At school, Pinocchio told his friend all about Fun Island.
 His friend wanted to go with him. Pinocchio and his companions boarded a ship heading to Fun Island.
  On the island, they did not know that boys were turned into donkeys and used for very hard work.

Pinocchio cried and wished he hadn't come to the island.
 He also wished he didn't look like a silly ass.
  The blue fairy heard his wish and with a wave of her magic wand his donkey ears and tail disappeared.
   Sad Pinocchio on the beach, sadly looking at the sea. He wondered if he would ever see Geppetto again.

Suddenly he saw Geppetto, who sailed out to sea in search of Pinocchio. Geppetto didn't see the huge whale behind him. The whale swallowed Geppetto and his boat.
 Pinocchio knew he needed to save Geppetto. He jumped into the water and swam with all his might.
  As he approached, the whale opened its mouth and Pinocchio walked straight in.
   Deep inside the whale's belly, Pinocchio and Geppetto hugged each other, happy to be together again.

- We need to find a way out - said Gepeto - we will make a fire with the wood from my boat.

The smoke made the whale sneeze. They left the whale's mouth and returned to the sea.
 Pinocchio and Geppetto swam safely to shore. They were both tired. They lay down on the sand and fell asleep.
  When Geppetto woke up, he saw that the blue fairy, as a reward for being so brave, had transformed Pinocchio into a real boy.

- Finally my wish came true!
Pinocchio

shouted Geppetto.

Once upon a time there was a carver named Geppetto.
 He made puppets out of pieces of wood and called his favorite puppet Pinocchio.

- I would love to be the father of a real boy like Pinocchio - he wished.

That night, the blue fairy, who knew that Geppetto was a good man, cast a spell on Pinocchio.
 The next day, Gappetto woke up and was very happy to discover that Pinocchio could walk, sit and talk like a real boy.

Geppetto wanted to send Pinocchio to school. He sold his only coat for a spelling book.

- Now you can go to school like a real boy - help Gappetto as we wave to Pinocchio.

 
On the way to school, Pinocchio stopped to watch a puppet show in a town.

- Would you like to participate in my puppet show? - asked the evil puppet master.

Pinocchio happily agreed. He was locked inside the evil puppet master's caravan.
 He wished he was safe with Geppetto. The blue fairy suddenly appeared.
  She listened to Pinocchio's desire and freed him. Pinocchio is happy to be free.

- I'm going straight to school - he said.

But he met an evil fox who told him about a wonderful place called Fun Island.
 Pinocchio completely forgot about school and gave the fox his spelling book in exchange for a ticket to Fun Island.

- Where are you going, Pinocchio? - asked the fairy b.

- I'm going to school - Pinocchio lied.

Pinocchio's nose became very, very long.
 He wishes he hadn't lied. The fairy called a bird to peck her long nose because Pinocchio was very sorry.
  Pinocchio promised never to be naughty again and went straight to school.

At school, Pinocchio told his friend all about Fun Island.
 His friend wanted to go with him. Pinocchio and his companions boarded a ship heading to Fun Island.
  On the island, they did not know that boys were turned into donkeys and used for very hard work.

Pinocchio cried and wished he hadn't come to the island.
 He also wished he didn't look like a silly ass.
  The blue fairy heard his wish and with a wave of her magic wand his donkey ears and tail disappeared.
   Sad Pinocchio on the beach, sadly looking at the sea. He wondered if he would ever see Geppetto again.

Suddenly he saw Geppetto, who sailed out to sea in search of Pinocchio. Geppetto didn't see the huge whale behind him. The whale swallowed Geppetto and his boat.
 Pinocchio knew he needed to save Geppetto. He jumped into the water and swam with all his might.
  As he approached, the whale opened its mouth and Pinocchio walked straight in.
   Deep inside the whale's belly, Pinocchio and Geppetto hugged each other, happy to be together again.

- We need to find a way out - said Gepeto - we will make a fire with the wood from my boat.

The smoke made the whale sneeze. They left the whale's mouth and returned to the sea.
 Pinocchio and Geppetto swam safely to shore. They were both tired. They lay down on the sand and fell asleep.
  When Geppetto woke up, he saw that the blue fairy, as a reward for being so brave, had transformed Pinocchio into a real boy.

- Finally my wish came true!
Pinocchio

shouted Geppetto.

Once upon a time there was a carver named Geppetto.
 He made puppets out of pieces of wood and called his favorite puppet Pinocchio.

- I would love to be the father of a real boy like Pinocchio - he wished.

That night, the blue fairy, who knew that Geppetto was a good man, cast a spell on Pinocchio.
 The next day, Gappetto woke up and was very happy to discover that Pinocchio could walk, sit and talk like a real boy.

Geppetto wanted to send Pinocchio to school. He sold his only coat for a spelling book.

- Now you can go to school like a real boy - help Gappetto as we wave to Pinocchio.

 
On the way to school, Pinocchio stopped to watch a puppet show in a town.

- Would you like to participate in my puppet show? - asked the evil puppet master.

Pinocchio happily agreed. He was locked inside the evil puppet master's caravan.
 He wished he was safe with Geppetto. The blue fairy suddenly appeared.
  She listened to Pinocchio's desire and freed him. Pinocchio is happy to be free.

- I'm going straight to school - he said.

But he met an evil fox who told him about a wonderful place called Fun Island.
 Pinocchio completely forgot about school and gave the fox his spelling book in exchange for a ticket to Fun Island.

- Where are you going, Pinocchio? - asked the fairy b.

- I'm going to school - Pinocchio lied.

Pinocchio's nose became very, very long.
 He wishes he hadn't lied. The fairy called a bird to peck her long nose because Pinocchio was very sorry.
  Pinocchio promised never to be naughty again and went straight to school.

At school, Pinocchio told his friend all about Fun Island.
 His friend wanted to go with him. Pinocchio and his companions boarded a ship heading to Fun Island.
  On the island, they did not know that boys were turned into donkeys and used for very hard work.

Pinocchio cried and wished he hadn't come to the island.
 He also wished he didn't look like a silly ass.
  The blue fairy heard his wish and with a wave of her magic wand his donkey ears and tail disappeared.
   Sad Pinocchio on the beach, sadly looking at the sea. He wondered if he would ever see Geppetto again.

Suddenly he saw Geppetto, who sailed out to sea in search of Pinocchio. Geppetto didn't see the huge whale behind him. The whale swallowed Geppetto and his boat.
 Pinocchio knew he needed to save Geppetto. He jumped into the water and swam with all his might.
  As he approached, the whale opened its mouth and Pinocchio walked straight in.
   Deep inside the whale's belly, Pinocchio and Geppetto hugged each other, happy to be together again.

- We need to find a way out - said Gepeto - we will make a fire with the wood from my boat.

The smoke made the whale sneeze. They left the whale's mouth and returned to the sea.
 Pinocchio and Geppetto swam safely to shore. They were both tired. They lay down on the sand and fell asleep.
  When Geppetto woke up, he saw that the blue fairy, as a reward for being so brave, had transformed Pinocchio into a real boy.

- Finally my wish came true!
Pinocchio

shouted Geppetto.

Once upon a time there was a carver named Geppetto.
 He made puppets out of pieces of wood and called his favorite puppet Pinocchio.

- I would love to be the father of a real boy like Pinocchio - he wished.

That night, the blue fairy, who knew that Geppetto was a good man, cast a spell on Pinocchio.
 The next day, Gappetto woke up and was very happy to discover that Pinocchio could walk, sit and talk like a real boy.

Geppetto wanted to send Pinocchio to school. He sold his only coat for a spelling book.

- Now you can go to school like a real boy - help Gappetto as we wave to Pinocchio.

 
On the way to school, Pinocchio stopped to watch a puppet show in a town.

- Would you like to participate in my puppet show? - asked the evil puppet master.

Pinocchio happily agreed. He was locked inside the evil puppet master's caravan.
 He wished he was safe with Geppetto. The blue fairy suddenly appeared.
  She listened to Pinocchio's desire and freed him. Pinocchio is happy to be free.

- I'm going straight to school - he said.

But he met an evil fox who told him about a wonderful place called Fun Island.
 Pinocchio completely forgot about school and gave the fox his spelling book in exchange for a ticket to Fun Island.

- Where are you going, Pinocchio? - asked the fairy b.

- I'm going to school - Pinocchio lied.

Pinocchio's nose became very, very long.
 He wishes he hadn't lied. The fairy called a bird to peck her long nose because Pinocchio was very sorry.
  Pinocchio promised never to be naughty again and went straight to school.

At school, Pinocchio told his friend all about Fun Island.
 His friend wanted to go with him. Pinocchio and his companions boarded a ship heading to Fun Island.
  On the island, they did not know that boys were turned into donkeys and used for very hard work.

Pinocchio cried and wished he hadn't come to the island.
 He also wished he didn't look like a silly ass.
  The blue fairy heard his wish and with a wave of her magic wand his donkey ears and tail disappeared.
   Sad Pinocchio on the beach, sadly looking at the sea. He wondered if he would ever see Geppetto again.

Suddenly he saw Geppetto, who sailed out to sea in search of Pinocchio. Geppetto didn't see the huge whale behind him. The whale swallowed Geppetto and his boat.
 Pinocchio knew he needed to save Geppetto. He jumped into the water and swam with all his might.
  As he approached, the whale opened its mouth and Pinocchio walked straight in.
   Deep inside the whale's belly, Pinocchio and Geppetto hugged each other, happy to be together again.

- We need to find a way out - said Gepeto - we will make a fire with the wood from my boat.

The smoke made the whale sneeze. They left the whale's mouth and returned to the sea.
 Pinocchio and Geppetto swam safely to shore. They were both tired. They lay down on the sand and fell asleep.
  When Geppetto woke up, he saw that the blue fairy, as a reward for being so brave, had transformed Pinocchio into a real boy.

- Finally my wish came true!
Pinocchio

shouted Geppetto.

Once upon a time there was a carver named Geppetto.
 He made puppets out of pieces of wood and called his favorite puppet Pinocchio.

- I would love to be the father of a real boy like Pinocchio - he wished.

That night, the blue fairy, who knew that Geppetto was a good man, cast a spell on Pinocchio.
 The next day, Gappetto woke up and was very happy to discover that Pinocchio could walk, sit and talk like a real boy.

Geppetto wanted to send Pinocchio to school. He sold his only coat for a spelling book.

- Now you can go to school like a real boy - help Gappetto as we wave to Pinocchio.

 
On the way to school, Pinocchio stopped to watch a puppet show in a town.

- Would you like to participate in my puppet show? - asked the evil puppet master.

Pinocchio happily agreed. He was locked inside the evil puppet master's caravan.
 He wished he was safe with Geppetto. The blue fairy suddenly appeared.
  She listened to Pinocchio's desire and freed him. Pinocchio is happy to be free.

- I'm going straight to school - he said.

But he met an evil fox who told him about a wonderful place called Fun Island.
 Pinocchio completely forgot about school and gave the fox his spelling book in exchange for a ticket to Fun Island.

- Where are you going, Pinocchio? - asked the fairy b.

- I'm going to school - Pinocchio lied.

Pinocchio's nose became very, very long.
 He wishes he hadn't lied. The fairy called a bird to peck her long nose because Pinocchio was very sorry.
  Pinocchio promised never to be naughty again and went straight to school.

At school, Pinocchio told his friend all about Fun Island.
 His friend wanted to go with him. Pinocchio and his companions boarded a ship heading to Fun Island.
  On the island, they did not know that boys were turned into donkeys and used for very hard work.

Pinocchio cried and wished he hadn't come to the island.
 He also wished he didn't look like a silly ass.
  The blue fairy heard his wish and with a wave of her magic wand his donkey ears and tail disappeared.
   Sad Pinocchio on the beach, sadly looking at the sea. He wondered if he would ever see Geppetto again.

Suddenly he saw Geppetto, who sailed out to sea in search of Pinocchio. Geppetto didn't see the huge whale behind him. The whale swallowed Geppetto and his boat.
 Pinocchio knew he needed to save Geppetto. He jumped into the water and swam with all his might.
  As he approached, the whale opened its mouth and Pinocchio walked straight in.
   Deep inside the whale's belly, Pinocchio and Geppetto hugged each other, happy to be together again.

- We need to find a way out - said Gepeto - we will make a fire with the wood from my boat.

The smoke made the whale sneeze. They left the whale's mouth and returned to the sea.
 Pinocchio and Geppetto swam safely to shore. They were both tired. They lay down on the sand and fell asleep.
  When Geppetto woke up, he saw that the blue fairy, as a reward for being so brave, had transformed Pinocchio into a real boy.

- Finally my wish came true!
Pinocchio

shouted Geppetto.

Once upon a time there was a carver named Geppetto.
 He made puppets out of pieces of wood and called his favorite puppet Pinocchio.

- I would love to be the father of a real boy like Pinocchio - he wished.

That night, the blue fairy, who knew that Geppetto was a good man, cast a spell on Pinocchio.
 The next day, Gappetto woke up and was very happy to discover that Pinocchio could walk, sit and talk like a real boy.

Geppetto wanted to send Pinocchio to school. He sold his only coat for a spelling book.

- Now you can go to school like a real boy - help Gappetto as we wave to Pinocchio.

 
On the way to school, Pinocchio stopped to watch a puppet show in a town.

- Would you like to participate in my puppet show? - asked the evil puppet master.

Pinocchio happily agreed. He was locked inside the evil puppet master's caravan.
 He wished he was safe with Geppetto. The blue fairy suddenly appeared.
  She listened to Pinocchio's desire and freed him. Pinocchio is happy to be free.

- I'm going straight to school - he said.

But he met an evil fox who told him about a wonderful place called Fun Island.
 Pinocchio completely forgot about school and gave the fox his spelling book in exchange for a ticket to Fun Island.

- Where are you going, Pinocchio? - asked the fairy b.

- I'm going to school - Pinocchio lied.

Pinocchio's nose became very, very long.
 He wishes he hadn't lied. The fairy called a bird to peck her long nose because Pinocchio was very sorry.
  Pinocchio promised never to be naughty again and went straight to school.

At school, Pinocchio told his friend all about Fun Island.
 His friend wanted to go with him. Pinocchio and his companions boarded a ship heading to Fun Island.
  On the island, they did not know that boys were turned into donkeys and used for very hard work.

Pinocchio cried and wished he hadn't come to the island.
 He also wished he didn't look like a silly ass.
  The blue fairy heard his wish and with a wave of her magic wand his donkey ears and tail disappeared.
   Sad Pinocchio on the beach, sadly looking at the sea. He wondered if he would ever see Geppetto again.

Suddenly he saw Geppetto, who sailed out to sea in search of Pinocchio. Geppetto didn't see the huge whale behind him. The whale swallowed Geppetto and his boat.
 Pinocchio knew he needed to save Geppetto. He jumped into the water and swam with all his might.
  As he approached, the whale opened its mouth and Pinocchio walked straight in.
   Deep inside the whale's belly, Pinocchio and Geppetto hugged each other, happy to be together again.

- We need to find a way out - said Gepeto - we will make a fire with the wood from my boat.

The smoke made the whale sneeze. They left the whale's mouth and returned to the sea.
 Pinocchio and Geppetto swam safely to shore. They were both tired. They lay down on the sand and fell asleep.
  When Geppetto woke up, he saw that the blue fairy, as a reward for being so brave, had transformed Pinocchio into a real boy.

- Finally my wish came true!
Pinocchio

shouted Geppetto.

Once upon a time there was a carver named Geppetto.
 He made puppets out of pieces of wood and called his favorite puppet Pinocchio.

- I would love to be the father of a real boy like Pinocchio - he wished.

That night, the blue fairy, who knew that Geppetto was a good man, cast a spell on Pinocchio.
 The next day, Gappetto woke up and was very happy to discover that Pinocchio could walk, sit and talk like a real boy.

Geppetto wanted to send Pinocchio to school. He sold his only coat for a spelling book.

- Now you can go to school like a real boy - help Gappetto as we wave to Pinocchio.

 
On the way to school, Pinocchio stopped to watch a puppet show in a town.

- Would you like to participate in my puppet show? - asked the evil puppet master.

Pinocchio happily agreed. He was locked inside the evil puppet master's caravan.
 He wished he was safe with Geppetto. The blue fairy suddenly appeared.
  She listened to Pinocchio's desire and freed him. Pinocchio is happy to be free.

- I'm going straight to school - he said.

But he met an evil fox who told him about a wonderful place called Fun Island.
 Pinocchio completely forgot about school and gave the fox his spelling book in exchange for a ticket to Fun Island.

- Where are you going, Pinocchio? - asked the fairy b.

- I'm going to school - Pinocchio lied.

Pinocchio's nose became very, very long.
 He wishes he hadn't lied. The fairy called a bird to peck her long nose because Pinocchio was very sorry.
  Pinocchio promised never to be naughty again and went straight to school.

At school, Pinocchio told his friend all about Fun Island.
 His friend wanted to go with him. Pinocchio and his companions boarded a ship heading to Fun Island.
  On the island, they did not know that boys were turned into donkeys and used for very hard work.

Pinocchio cried and wished he hadn't come to the island.
 He also wished he didn't look like a silly ass.
  The blue fairy heard his wish and with a wave of her magic wand his donkey ears and tail disappeared.
   Sad Pinocchio on the beach, sadly looking at the sea. He wondered if he would ever see Geppetto again.

Suddenly he saw Geppetto, who sailed out to sea in search of Pinocchio. Geppetto didn't see the huge whale behind him. The whale swallowed Geppetto and his boat.
 Pinocchio knew he needed to save Geppetto. He jumped into the water and swam with all his might.
  As he approached, the whale opened its mouth and Pinocchio walked straight in.
   Deep inside the whale's belly, Pinocchio and Geppetto hugged each other, happy to be together again.

- We need to find a way out - said Gepeto - we will make a fire with the wood from my boat.

The smoke made the whale sneeze. They left the whale's mouth and returned to the sea.
 Pinocchio and Geppetto swam safely to shore. They were both tired. They lay down on the sand and fell asleep.
  When Geppetto woke up, he saw that the blue fairy, as a reward for being so brave, had transformed Pinocchio into a real boy.

- Finally my wish came true!
Pinocchio

shouted Geppetto.

Once upon a time there was a carver named Geppetto.
 He made puppets out of pieces of wood and called his favorite puppet Pinocchio.

- I would love to be the father of a real boy like Pinocchio - he wished.

That night, the blue fairy, who knew that Geppetto was a good man, cast a spell on Pinocchio.
 The next day, Gappetto woke up and was very happy to discover that Pinocchio could walk, sit and talk like a real boy.

Geppetto wanted to send Pinocchio to school. He sold his only coat for a spelling book.

- Now you can go to school like a real boy - help Gappetto as we wave to Pinocchio.

 
On the way to school, Pinocchio stopped to watch a puppet show in a town.

- Would you like to participate in my puppet show? - asked the evil puppet master.

Pinocchio happily agreed. He was locked inside the evil puppet master's caravan.
 He wished he was safe with Geppetto. The blue fairy suddenly appeared.
  She listened to Pinocchio's desire and freed him. Pinocchio is happy to be free.

- I'm going straight to school - he said.

But he met an evil fox who told him about a wonderful place called Fun Island.
 Pinocchio completely forgot about school and gave the fox his spelling book in exchange for a ticket to Fun Island.

- Where are you going, Pinocchio? - asked the fairy b.

- I'm going to school - Pinocchio lied.

Pinocchio's nose became very, very long.
 He wishes he hadn't lied. The fairy called a bird to peck her long nose because Pinocchio was very sorry.
  Pinocchio promised never to be naughty again and went straight to school.

At school, Pinocchio told his friend all about Fun Island.
 His friend wanted to go with him. Pinocchio and his companions boarded a ship heading to Fun Island.
  On the island, they did not know that boys were turned into donkeys and used for very hard work.

Pinocchio cried and wished he hadn't come to the island.
 He also wished he didn't look like a silly ass.
  The blue fairy heard his wish and with a wave of her magic wand his donkey ears and tail disappeared.
   Sad Pinocchio on the beach, sadly looking at the sea. He wondered if he would ever see Geppetto again.

Suddenly he saw Geppetto, who sailed out to sea in search of Pinocchio. Geppetto didn't see the huge whale behind him. The whale swallowed Geppetto and his boat.
 Pinocchio knew he needed to save Geppetto. He jumped into the water and swam with all his might.
  As he approached, the whale opened its mouth and Pinocchio walked straight in.
   Deep inside the whale's belly, Pinocchio and Geppetto hugged each other, happy to be together again.

- We need to find a way out - said Gepeto - we will make a fire with the wood from my boat.

The smoke made the whale sneeze. They left the whale's mouth and returned to the sea.
 Pinocchio and Geppetto swam safely to shore. They were both tired. They lay down on the sand and fell asleep.
  When Geppetto woke up, he saw that the blue fairy, as a reward for being so brave, had transformed Pinocchio into a real boy.

- Finally my wish came true!
Pinocchio

shouted Geppetto.

Once upon a time there was a carver named Geppetto.
 He made puppets out of pieces of wood and called his favorite puppet Pinocchio.

- I would love to be the father of a real boy like Pinocchio - he wished.

That night, the blue fairy, who knew that Geppetto was a good man, cast a spell on Pinocchio.
 The next day, Gappetto woke up and was very happy to discover that Pinocchio could walk, sit and talk like a real boy.

Geppetto wanted to send Pinocchio to school. He sold his only coat for a spelling book.

- Now you can go to school like a real boy - help Gappetto as we wave to Pinocchio.

 
On the way to school, Pinocchio stopped to watch a puppet show in a town.

- Would you like to participate in my puppet show? - asked the evil puppet master.

Pinocchio happily agreed. He was locked inside the evil puppet master's caravan.
 He wished he was safe with Geppetto. The blue fairy suddenly appeared.
  She listened to Pinocchio's desire and freed him. Pinocchio is happy to be free.

- I'm going straight to school - he said.

But he met an evil fox who told him about a wonderful place called Fun Island.
 Pinocchio completely forgot about school and gave the fox his spelling book in exchange for a ticket to Fun Island.

- Where are you going, Pinocchio? - asked the fairy b.

- I'm going to school - Pinocchio lied.

Pinocchio's nose became very, very long.
 He wishes he hadn't lied. The fairy called a bird to peck her long nose because Pinocchio was very sorry.
  Pinocchio promised never to be naughty again and went straight to school.

At school, Pinocchio told his friend all about Fun Island.
 His friend wanted to go with him. Pinocchio and his companions boarded a ship heading to Fun Island.
  On the island, they did not know that boys were turned into donkeys and used for very hard work.

Pinocchio cried and wished he hadn't come to the island.
 He also wished he didn't look like a silly ass.
  The blue fairy heard his wish and with a wave of her magic wand his donkey ears and tail disappeared.
   Sad Pinocchio on the beach, sadly looking at the sea. He wondered if he would ever see Geppetto again.

Suddenly he saw Geppetto, who sailed out to sea in search of Pinocchio. Geppetto didn't see the huge whale behind him. The whale swallowed Geppetto and his boat.
 Pinocchio knew he needed to save Geppetto. He jumped into the water and swam with all his might.
  As he approached, the whale opened its mouth and Pinocchio walked straight in.
   Deep inside the whale's belly, Pinocchio and Geppetto hugged each other, happy to be together again.

- We need to find a way out - said Gepeto - we will make a fire with the wood from my boat.

The smoke made the whale sneeze. They left the whale's mouth and returned to the sea.
 Pinocchio and Geppetto swam safely to shore. They were both tired. They lay down on the sand and fell asleep.
  When Geppetto woke up, he saw that the blue fairy, as a reward for being so brave, had transformed Pinocchio into a real boy.

- Finally my wish came true!
Pinocchio

shouted Geppetto.

Once upon a time there was a carver named Geppetto.
 He made puppets out of pieces of wood and called his favorite puppet Pinocchio.

- I would love to be the father of a real boy like Pinocchio - he wished.

That night, the blue fairy, who knew that Geppetto was a good man, cast a spell on Pinocchio.
 The next day, Gappetto woke up and was very happy to discover that Pinocchio could walk, sit and talk like a real boy.

Geppetto wanted to send Pinocchio to school. He sold his only coat for a spelling book.

- Now you can go to school like a real boy - help Gappetto as we wave to Pinocchio.

 
On the way to school, Pinocchio stopped to watch a puppet show in a town.

- Would you like to participate in my puppet show? - asked the evil puppet master.

Pinocchio happily agreed. He was locked inside the evil puppet master's caravan.
 He wished he was safe with Geppetto. The blue fairy suddenly appeared.
  She listened to Pinocchio's desire and freed him. Pinocchio is happy to be free.

- I'm going straight to school - he said.

But he met an evil fox who told him about a wonderful place called Fun Island.
 Pinocchio completely forgot about school and gave the fox his spelling book in exchange for a ticket to Fun Island.

- Where are you going, Pinocchio? - asked the fairy b.

- I'm going to school - Pinocchio lied.

Pinocchio's nose became very, very long.
 He wishes he hadn't lied. The fairy called a bird to peck her long nose because Pinocchio was very sorry.
  Pinocchio promised never to be naughty again and went straight to school.

At school, Pinocchio told his friend all about Fun Island.
 His friend wanted to go with him. Pinocchio and his companions boarded a ship heading to Fun Island.
  On the island, they did not know that boys were turned into donkeys and used for very hard work.

Pinocchio cried and wished he hadn't come to the island.
 He also wished he didn't look like a silly ass.
  The blue fairy heard his wish and with a wave of her magic wand his donkey ears and tail disappeared.
   Sad Pinocchio on the beach, sadly looking at the sea. He wondered if he would ever see Geppetto again.

Suddenly he saw Geppetto, who sailed out to sea in search of Pinocchio. Geppetto didn't see the huge whale behind him. The whale swallowed Geppetto and his boat.
 Pinocchio knew he needed to save Geppetto. He jumped into the water and swam with all his might.
  As he approached, the whale opened its mouth and Pinocchio walked straight in.
   Deep inside the whale's belly, Pinocchio and Geppetto hugged each other, happy to be together again.

- We need to find a way out - said Gepeto - we will make a fire with the wood from my boat.

The smoke made the whale sneeze. They left the whale's mouth and returned to the sea.
 Pinocchio and Geppetto swam safely to shore. They were both tired. They lay down on the sand and fell asleep.
  When Geppetto woke up, he saw that the blue fairy, as a reward for being so brave, had transformed Pinocchio into a real boy.

- Finally my wish came true!
Pinocchio

shouted Geppetto.

Once upon a time there was a carver named Geppetto.
 He made puppets out of pieces of wood and called his favorite puppet Pinocchio.

- I would love to be the father of a real boy like Pinocchio - he wished.

That night, the blue fairy, who knew that Geppetto was a good man, cast a spell on Pinocchio.
 The next day, Gappetto woke up and was very happy to discover that Pinocchio could walk, sit and talk like a real boy.

Geppetto wanted to send Pinocchio to school. He sold his only coat for a spelling book.

- Now you can go to school like a real boy - help Gappetto as we wave to Pinocchio.

 
On the way to school, Pinocchio stopped to watch a puppet show in a town.

- Would you like to participate in my puppet show? - asked the evil puppet master.

Pinocchio happily agreed. He was locked inside the evil puppet master's caravan.
 He wished he was safe with Geppetto. The blue fairy suddenly appeared.
  She listened to Pinocchio's desire and freed him. Pinocchio is happy to be free.

- I'm going straight to school - he said.

But he met an evil fox who told him about a wonderful place called Fun Island.
 Pinocchio completely forgot about school and gave the fox his spelling book in exchange for a ticket to Fun Island.

- Where are you going, Pinocchio? - asked the fairy b.

- I'm going to school - Pinocchio lied.

Pinocchio's nose became very, very long.
 He wishes he hadn't lied. The fairy called a bird to peck her long nose because Pinocchio was very sorry.
  Pinocchio promised never to be naughty again and went straight to school.

At school, Pinocchio told his friend all about Fun Island.
 His friend wanted to go with him. Pinocchio and his companions boarded a ship heading to Fun Island.
  On the island, they did not know that boys were turned into donkeys and used for very hard work.

Pinocchio cried and wished he hadn't come to the island.
 He also wished he didn't look like a silly ass.
  The blue fairy heard his wish and with a wave of her magic wand his donkey ears and tail disappeared.
   Sad Pinocchio on the beach, sadly looking at the sea. He wondered if he would ever see Geppetto again.

Suddenly he saw Geppetto, who sailed out to sea in search of Pinocchio. Geppetto didn't see the huge whale behind him. The whale swallowed Geppetto and his boat.
 Pinocchio knew he needed to save Geppetto. He jumped into the water and swam with all his might.
  As he approached, the whale opened its mouth and Pinocchio walked straight in.
   Deep inside the whale's belly, Pinocchio and Geppetto hugged each other, happy to be together again.

- We need to find a way out - said Gepeto - we will make a fire with the wood from my boat.

The smoke made the whale sneeze. They left the whale's mouth and returned to the sea.
 Pinocchio and Geppetto swam safely to shore. They were both tired. They lay down on the sand and fell asleep.
  When Geppetto woke up, he saw that the blue fairy, as a reward for being so brave, had transformed Pinocchio into a real boy.

- Finally my wish came true!
Pinocchio

shouted Geppetto.

Once upon a time there was a carver named Geppetto.
 He made puppets out of pieces of wood and called his favorite puppet Pinocchio.

- I would love to be the father of a real boy like Pinocchio - he wished.

That night, the blue fairy, who knew that Geppetto was a good man, cast a spell on Pinocchio.
 The next day, Gappetto woke up and was very happy to discover that Pinocchio could walk, sit and talk like a real boy.

Geppetto wanted to send Pinocchio to school. He sold his only coat for a spelling book.

- Now you can go to school like a real boy - help Gappetto as we wave to Pinocchio.

 
On the way to school, Pinocchio stopped to watch a puppet show in a town.

- Would you like to participate in my puppet show? - asked the evil puppet master.

Pinocchio happily agreed. He was locked inside the evil puppet master's caravan.
 He wished he was safe with Geppetto. The blue fairy suddenly appeared.
  She listened to Pinocchio's desire and freed him. Pinocchio is happy to be free.

- I'm going straight to school - he said.

But he met an evil fox who told him about a wonderful place called Fun Island.
 Pinocchio completely forgot about school and gave the fox his spelling book in exchange for a ticket to Fun Island.

- Where are you going, Pinocchio? - asked the fairy b.

- I'm going to school - Pinocchio lied.

Pinocchio's nose became very, very long.
 He wishes he hadn't lied. The fairy called a bird to peck her long nose because Pinocchio was very sorry.
  Pinocchio promised never to be naughty again and went straight to school.

At school, Pinocchio told his friend all about Fun Island.
 His friend wanted to go with him. Pinocchio and his companions boarded a ship heading to Fun Island.
  On the island, they did not know that boys were turned into donkeys and used for very hard work.

Pinocchio cried and wished he hadn't come to the island.
 He also wished he didn't look like a silly ass.
  The blue fairy heard his wish and with a wave of her magic wand his donkey ears and tail disappeared.
   Sad Pinocchio on the beach, sadly looking at the sea. He wondered if he would ever see Geppetto again.

Suddenly he saw Geppetto, who sailed out to sea in search of Pinocchio. Geppetto didn't see the huge whale behind him. The whale swallowed Geppetto and his boat.
 Pinocchio knew he needed to save Geppetto. He jumped into the water and swam with all his might.
  As he approached, the whale opened its mouth and Pinocchio walked straight in.
   Deep inside the whale's belly, Pinocchio and Geppetto hugged each other, happy to be together again.

- We need to find a way out - said Gepeto - we will make a fire with the wood from my boat.

The smoke made the whale sneeze. They left the whale's mouth and returned to the sea.
 Pinocchio and Geppetto swam safely to shore. They were both tired. They lay down on the sand and fell asleep.
  When Geppetto woke up, he saw that the blue fairy, as a reward for being so brave, had transformed Pinocchio into a real boy.

- Finally my wish came true!
Pinocchio

shouted Geppetto.

Once upon a time there was a carver named Geppetto.
 He made puppets out of pieces of wood and called his favorite puppet Pinocchio.

- I would love to be the father of a real boy like Pinocchio - he wished.

That night, the blue fairy, who knew that Geppetto was a good man, cast a spell on Pinocchio.
 The next day, Gappetto woke up and was very happy to discover that Pinocchio could walk, sit and talk like a real boy.

Geppetto wanted to send Pinocchio to school. He sold his only coat for a spelling book.

- Now you can go to school like a real boy - help Gappetto as we wave to Pinocchio.

 
On the way to school, Pinocchio stopped to watch a puppet show in a town.

- Would you like to participate in my puppet show? - asked the evil puppet master.

Pinocchio happily agreed. He was locked inside the evil puppet master's caravan.
 He wished he was safe with Geppetto. The blue fairy suddenly appeared.
  She listened to Pinocchio's desire and freed him. Pinocchio is happy to be free.

- I'm going straight to school - he said.

But he met an evil fox who told him about a wonderful place called Fun Island.
 Pinocchio completely forgot about school and gave the fox his spelling book in exchange for a ticket to Fun Island.

- Where are you going, Pinocchio? - asked the fairy b.

- I'm going to school - Pinocchio lied.

Pinocchio's nose became very, very long.
 He wishes he hadn't lied. The fairy called a bird to peck her long nose because Pinocchio was very sorry.
  Pinocchio promised never to be naughty again and went straight to school.

At school, Pinocchio told his friend all about Fun Island.
 His friend wanted to go with him. Pinocchio and his companions boarded a ship heading to Fun Island.
  On the island, they did not know that boys were turned into donkeys and used for very hard work.

Pinocchio cried and wished he hadn't come to the island.
 He also wished he didn't look like a silly ass.
  The blue fairy heard his wish and with a wave of her magic wand his donkey ears and tail disappeared.
   Sad Pinocchio on the beach, sadly looking at the sea. He wondered if he would ever see Geppetto again.

Suddenly he saw Geppetto, who sailed out to sea in search of Pinocchio. Geppetto didn't see the huge whale behind him. The whale swallowed Geppetto and his boat.
 Pinocchio knew he needed to save Geppetto. He jumped into the water and swam with all his might.
  As he approached, the whale opened its mouth and Pinocchio walked straight in.
   Deep inside the whale's belly, Pinocchio and Geppetto hugged each other, happy to be together again.

- We need to find a way out - said Gepeto - we will make a fire with the wood from my boat.

The smoke made the whale sneeze. They left the whale's mouth and returned to the sea.
 Pinocchio and Geppetto swam safely to shore. They were both tired. They lay down on the sand and fell asleep.
  When Geppetto woke up, he saw that the blue fairy, as a reward for being so brave, had transformed Pinocchio into a real boy.

- Finally my wish came true!
Pinocchio

shouted Geppetto.

Once upon a time there was a carver named Geppetto.
 He made puppets out of pieces of wood and called his favorite puppet Pinocchio.

- I would love to be the father of a real boy like Pinocchio - he wished.

That night, the blue fairy, who knew that Geppetto was a good man, cast a spell on Pinocchio.
 The next day, Gappetto woke up and was very happy to discover that Pinocchio could walk, sit and talk like a real boy.

Geppetto wanted to send Pinocchio to school. He sold his only coat for a spelling book.

- Now you can go to school like a real boy - help Gappetto as we wave to Pinocchio.

 
On the way to school, Pinocchio stopped to watch a puppet show in a town.

- Would you like to participate in my puppet show? - asked the evil puppet master.

Pinocchio happily agreed. He was locked inside the evil puppet master's caravan.
 He wished he was safe with Geppetto. The blue fairy suddenly appeared.
  She listened to Pinocchio's desire and freed him. Pinocchio is happy to be free.

- I'm going straight to school - he said.

But he met an evil fox who told him about a wonderful place called Fun Island.
 Pinocchio completely forgot about school and gave the fox his spelling book in exchange for a ticket to Fun Island.

- Where are you going, Pinocchio? - asked the fairy b.

- I'm going to school - Pinocchio lied.

Pinocchio's nose became very, very long.
 He wishes he hadn't lied. The fairy called a bird to peck her long nose because Pinocchio was very sorry.
  Pinocchio promised never to be naughty again and went straight to school.

At school, Pinocchio told his friend all about Fun Island.
 His friend wanted to go with him. Pinocchio and his companions boarded a ship heading to Fun Island.
  On the island, they did not know that boys were turned into donkeys and used for very hard work.

Pinocchio cried and wished he hadn't come to the island.
 He also wished he didn't look like a silly ass.
  The blue fairy heard his wish and with a wave of her magic wand his donkey ears and tail disappeared.
   Sad Pinocchio on the beach, sadly looking at the sea. He wondered if he would ever see Geppetto again.

Suddenly he saw Geppetto, who sailed out to sea in search of Pinocchio. Geppetto didn't see the huge whale behind him. The whale swallowed Geppetto and his boat.
 Pinocchio knew he needed to save Geppetto. He jumped into the water and swam with all his might.
  As he approached, the whale opened its mouth and Pinocchio walked straight in.
   Deep inside the whale's belly, Pinocchio and Geppetto hugged each other, happy to be together again.

- We need to find a way out - said Gepeto - we will make a fire with the wood from my boat.

The smoke made the whale sneeze. They left the whale's mouth and returned to the sea.
 Pinocchio and Geppetto swam safely to shore. They were both tired. They lay down on the sand and fell asleep.
  When Geppetto woke up, he saw that the blue fairy, as a reward for being so brave, had transformed Pinocchio into a real boy.

- Finally my wish came true!
Pinocchio

shouted Geppetto.

Once upon a time there was a carver named Geppetto.
 He made puppets out of pieces of wood and called his favorite puppet Pinocchio.

- I would love to be the father of a real boy like Pinocchio - he wished.

That night, the blue fairy, who knew that Geppetto was a good man, cast a spell on Pinocchio.
 The next day, Gappetto woke up and was very happy to discover that Pinocchio could walk, sit and talk like a real boy.

Geppetto wanted to send Pinocchio to school. He sold his only coat for a spelling book.

- Now you can go to school like a real boy - help Gappetto as we wave to Pinocchio.

 
On the way to school, Pinocchio stopped to watch a puppet show in a town.

- Would you like to participate in my puppet show? - asked the evil puppet master.

Pinocchio happily agreed. He was locked inside the evil puppet master's caravan.
 He wished he was safe with Geppetto. The blue fairy suddenly appeared.
  She listened to Pinocchio's desire and freed him. Pinocchio is happy to be free.

- I'm going straight to school - he said.

But he met an evil fox who told him about a wonderful place called Fun Island.
 Pinocchio completely forgot about school and gave the fox his spelling book in exchange for a ticket to Fun Island.

- Where are you going, Pinocchio? - asked the fairy b.

- I'm going to school - Pinocchio lied.

Pinocchio's nose became very, very long.
 He wishes he hadn't lied. The fairy called a bird to peck her long nose because Pinocchio was very sorry.
  Pinocchio promised never to be naughty again and went straight to school.

At school, Pinocchio told his friend all about Fun Island.
 His friend wanted to go with him. Pinocchio and his companions boarded a ship heading to Fun Island.
  On the island, they did not know that boys were turned into donkeys and used for very hard work.

Pinocchio cried and wished he hadn't come to the island.
 He also wished he didn't look like a silly ass.
  The blue fairy heard his wish and with a wave of her magic wand his donkey ears and tail disappeared.
   Sad Pinocchio on the beach, sadly looking at the sea. He wondered if he would ever see Geppetto again.

Suddenly he saw Geppetto, who sailed out to sea in search of Pinocchio. Geppetto didn't see the huge whale behind him. The whale swallowed Geppetto and his boat.
 Pinocchio knew he needed to save Geppetto. He jumped into the water and swam with all his might.
  As he approached, the whale opened its mouth and Pinocchio walked straight in.
   Deep inside the whale's belly, Pinocchio and Geppetto hugged each other, happy to be together again.

- We need to find a way out - said Gepeto - we will make a fire with the wood from my boat.

The smoke made the whale sneeze. They left the whale's mouth and returned to the sea.
 Pinocchio and Geppetto swam safely to shore. They were both tired. They lay down on the sand and fell asleep.
  When Geppetto woke up, he saw that the blue fairy, as a reward for being so brave, had transformed Pinocchio into a real boy.

- Finally my wish came true!
Pinocchio

shouted Geppetto.

Once upon a time there was a carver named Geppetto.
 He made puppets out of pieces of wood and called his favorite puppet Pinocchio.

- I would love to be the father of a real boy like Pinocchio - he wished.

That night, the blue fairy, who knew that Geppetto was a good man, cast a spell on Pinocchio.
 The next day, Gappetto woke up and was very happy to discover that Pinocchio could walk, sit and talk like a real boy.

Geppetto wanted to send Pinocchio to school. He sold his only coat for a spelling book.

- Now you can go to school like a real boy - help Gappetto as we wave to Pinocchio.

 
On the way to school, Pinocchio stopped to watch a puppet show in a town.

- Would you like to participate in my puppet show? - asked the evil puppet master.

Pinocchio happily agreed. He was locked inside the evil puppet master's caravan.
 He wished he was safe with Geppetto. The blue fairy suddenly appeared.
  She listened to Pinocchio's desire and freed him. Pinocchio is happy to be free.

- I'm going straight to school - he said.

But he met an evil fox who told him about a wonderful place called Fun Island.
 Pinocchio completely forgot about school and gave the fox his spelling book in exchange for a ticket to Fun Island.

- Where are you going, Pinocchio? - asked the fairy b.

- I'm going to school - Pinocchio lied.

Pinocchio's nose became very, very long.
 He wishes he hadn't lied. The fairy called a bird to peck her long nose because Pinocchio was very sorry.
  Pinocchio promised never to be naughty again and went straight to school.

At school, Pinocchio told his friend all about Fun Island.
 His friend wanted to go with him. Pinocchio and his companions boarded a ship heading to Fun Island.
  On the island, they did not know that boys were turned into donkeys and used for very hard work.

Pinocchio cried and wished he hadn't come to the island.
 He also wished he didn't look like a silly ass.
  The blue fairy heard his wish and with a wave of her magic wand his donkey ears and tail disappeared.
   Sad Pinocchio on the beach, sadly looking at the sea. He wondered if he would ever see Geppetto again.

Suddenly he saw Geppetto, who sailed out to sea in search of Pinocchio. Geppetto didn't see the huge whale behind him. The whale swallowed Geppetto and his boat.
 Pinocchio knew he needed to save Geppetto. He jumped into the water and swam with all his might.
  As he approached, the whale opened its mouth and Pinocchio walked straight in.
   Deep inside the whale's belly, Pinocchio and Geppetto hugged each other, happy to be together again.

- We need to find a way out - said Gepeto - we will make a fire with the wood from my boat.

The smoke made the whale sneeze. They left the whale's mouth and returned to the sea.
 Pinocchio and Geppetto swam safely to shore. They were both tired. They lay down on the sand and fell asleep.
  When Geppetto woke up, he saw that the blue fairy, as a reward for being so brave, had transformed Pinocchio into a real boy.

- Finally my wish came true!
Pinocchio

shouted Geppetto.

Once upon a time there was a carver named Geppetto.
 He made puppets out of pieces of wood and called his favorite puppet Pinocchio.

- I would love to be the father of a real boy like Pinocchio - he wished.

That night, the blue fairy, who knew that Geppetto was a good man, cast a spell on Pinocchio.
 The next day, Gappetto woke up and was very happy to discover that Pinocchio could walk, sit and talk like a real boy.

Geppetto wanted to send Pinocchio to school. He sold his only coat for a spelling book.

- Now you can go to school like a real boy - help Gappetto as we wave to Pinocchio.

 
On the way to school, Pinocchio stopped to watch a puppet show in a town.

- Would you like to participate in my puppet show? - asked the evil puppet master.

Pinocchio happily agreed. He was locked inside the evil puppet master's caravan.
 He wished he was safe with Geppetto. The blue fairy suddenly appeared.
  She listened to Pinocchio's desire and freed him. Pinocchio is happy to be free.

- I'm going straight to school - he said.

But he met an evil fox who told him about a wonderful place called Fun Island.
 Pinocchio completely forgot about school and gave the fox his spelling book in exchange for a ticket to Fun Island.

- Where are you going, Pinocchio? - asked the fairy b.

- I'm going to school - Pinocchio lied.

Pinocchio's nose became very, very long.
 He wishes he hadn't lied. The fairy called a bird to peck her long nose because Pinocchio was very sorry.
  Pinocchio promised never to be naughty again and went straight to school.

At school, Pinocchio told his friend all about Fun Island.
 His friend wanted to go with him. Pinocchio and his companions boarded a ship heading to Fun Island.
  On the island, they did not know that boys were turned into donkeys and used for very hard work.

Pinocchio cried and wished he hadn't come to the island.
 He also wished he didn't look like a silly ass.
  The blue fairy heard his wish and with a wave of her magic wand his donkey ears and tail disappeared.
   Sad Pinocchio on the beach, sadly looking at the sea. He wondered if he would ever see Geppetto again.

Suddenly he saw Geppetto, who sailed out to sea in search of Pinocchio. Geppetto didn't see the huge whale behind him. The whale swallowed Geppetto and his boat.
 Pinocchio knew he needed to save Geppetto. He jumped into the water and swam with all his might.
  As he approached, the whale opened its mouth and Pinocchio walked straight in.
   Deep inside the whale's belly, Pinocchio and Geppetto hugged each other, happy to be together again.

- We need to find a way out - said Gepeto - we will make a fire with the wood from my boat.

The smoke made the whale sneeze. They left the whale's mouth and returned to the sea.
 Pinocchio and Geppetto swam safely to shore. They were both tired. They lay down on the sand and fell asleep.
  When Geppetto woke up, he saw that the blue fairy, as a reward for being so brave, had transformed Pinocchio into a real boy.

- Finally my wish came true!
Pinocchio

shouted Geppetto.

Once upon a time there was a carver named Geppetto.
 He made puppets out of pieces of wood and called his favorite puppet Pinocchio.

- I would love to be the father of a real boy like Pinocchio - he wished.

That night, the blue fairy, who knew that Geppetto was a good man, cast a spell on Pinocchio.
 The next day, Gappetto woke up and was very happy to discover that Pinocchio could walk, sit and talk like a real boy.

Geppetto wanted to send Pinocchio to school. He sold his only coat for a spelling book.

- Now you can go to school like a real boy - help Gappetto as we wave to Pinocchio.

 
On the way to school, Pinocchio stopped to watch a puppet show in a town.

- Would you like to participate in my puppet show? - asked the evil puppet master.

Pinocchio happily agreed. He was locked inside the evil puppet master's caravan.
 He wished he was safe with Geppetto. The blue fairy suddenly appeared.
  She listened to Pinocchio's desire and freed him. Pinocchio is happy to be free.

- I'm going straight to school - he said.

But he met an evil fox who told him about a wonderful place called Fun Island.
 Pinocchio completely forgot about school and gave the fox his spelling book in exchange for a ticket to Fun Island.

- Where are you going, Pinocchio? - asked the fairy b.

- I'm going to school - Pinocchio lied.

Pinocchio's nose became very, very long.
 He wishes he hadn't lied. The fairy called a bird to peck her long nose because Pinocchio was very sorry.
  Pinocchio promised never to be naughty again and went straight to school.

At school, Pinocchio told his friend all about Fun Island.
 His friend wanted to go with him. Pinocchio and his companions boarded a ship heading to Fun Island.
  On the island, they did not know that boys were turned into donkeys and used for very hard work.

Pinocchio cried and wished he hadn't come to the island.
 He also wished he didn't look like a silly ass.
  The blue fairy heard his wish and with a wave of her magic wand his donkey ears and tail disappeared.
   Sad Pinocchio on the beach, sadly looking at the sea. He wondered if he would ever see Geppetto again.

Suddenly he saw Geppetto, who sailed out to sea in search of Pinocchio. Geppetto didn't see the huge whale behind him. The whale swallowed Geppetto and his boat.
 Pinocchio knew he needed to save Geppetto. He jumped into the water and swam with all his might.
  As he approached, the whale opened its mouth and Pinocchio walked straight in.
   Deep inside the whale's belly, Pinocchio and Geppetto hugged each other, happy to be together again.

- We need to find a way out - said Gepeto - we will make a fire with the wood from my boat.

The smoke made the whale sneeze. They left the whale's mouth and returned to the sea.
 Pinocchio and Geppetto swam safely to shore. They were both tired. They lay down on the sand and fell asleep.
  When Geppetto woke up, he saw that the blue fairy, as a reward for being so brave, had transformed Pinocchio into a real boy.

- Finally my wish came true!
Pinocchio

shouted Geppetto.

Once upon a time there was a carver named Geppetto.
 He made puppets out of pieces of wood and called his favorite puppet Pinocchio.

- I would love to be the father of a real boy like Pinocchio - he wished.

That night, the blue fairy, who knew that Geppetto was a good man, cast a spell on Pinocchio.
 The next day, Gappetto woke up and was very happy to discover that Pinocchio could walk, sit and talk like a real boy.

Geppetto wanted to send Pinocchio to school. He sold his only coat for a spelling book.

- Now you can go to school like a real boy - help Gappetto as we wave to Pinocchio.

 
On the way to school, Pinocchio stopped to watch a puppet show in a town.

- Would you like to participate in my puppet show? - asked the evil puppet master.

Pinocchio happily agreed. He was locked inside the evil puppet master's caravan.
 He wished he was safe with Geppetto. The blue fairy suddenly appeared.
  She listened to Pinocchio's desire and freed him. Pinocchio is happy to be free.

- I'm going straight to school - he said.

But he met an evil fox who told him about a wonderful place called Fun Island.
 Pinocchio completely forgot about school and gave the fox his spelling book in exchange for a ticket to Fun Island.

- Where are you going, Pinocchio? - asked the fairy b.

- I'm going to school - Pinocchio lied.

Pinocchio's nose became very, very long.
 He wishes he hadn't lied. The fairy called a bird to peck her long nose because Pinocchio was very sorry.
  Pinocchio promised never to be naughty again and went straight to school.

At school, Pinocchio told his friend all about Fun Island.
 His friend wanted to go with him. Pinocchio and his companions boarded a ship heading to Fun Island.
  On the island, they did not know that boys were turned into donkeys and used for very hard work.

Pinocchio cried and wished he hadn't come to the island.
 He also wished he didn't look like a silly ass.
  The blue fairy heard his wish and with a wave of her magic wand his donkey ears and tail disappeared.
   Sad Pinocchio on the beach, sadly looking at the sea. He wondered if he would ever see Geppetto again.

Suddenly he saw Geppetto, who sailed out to sea in search of Pinocchio. Geppetto didn't see the huge whale behind him. The whale swallowed Geppetto and his boat.
 Pinocchio knew he needed to save Geppetto. He jumped into the water and swam with all his might.
  As he approached, the whale opened its mouth and Pinocchio walked straight in.
   Deep inside the whale's belly, Pinocchio and Geppetto hugged each other, happy to be together again.

- We need to find a way out - said Gepeto - we will make a fire with the wood from my boat.

The smoke made the whale sneeze. They left the whale's mouth and returned to the sea.
 Pinocchio and Geppetto swam safely to shore. They were both tired. They lay down on the sand and fell asleep.
  When Geppetto woke up, he saw that the blue fairy, as a reward for being so brave, had transformed Pinocchio into a real boy.

- Finally my wish came true!
Pinocchio

shouted Geppetto.

Once upon a time there was a carver named Geppetto.
 He made puppets out of pieces of wood and called his favorite puppet Pinocchio.

- I would love to be the father of a real boy like Pinocchio - he wished.

That night, the blue fairy, who knew that Geppetto was a good man, cast a spell on Pinocchio.
 The next day, Gappetto woke up and was very happy to discover that Pinocchio could walk, sit and talk like a real boy.

Geppetto wanted to send Pinocchio to school. He sold his only coat for a spelling book.

- Now you can go to school like a real boy - help Gappetto as we wave to Pinocchio.

 
On the way to school, Pinocchio stopped to watch a puppet show in a town.

- Would you like to participate in my puppet show? - asked the evil puppet master.

Pinocchio happily agreed. He was locked inside the evil puppet master's caravan.
 He wished he was safe with Geppetto. The blue fairy suddenly appeared.
  She listened to Pinocchio's desire and freed him. Pinocchio is happy to be free.

- I'm going straight to school - he said.

But he met an evil fox who told him about a wonderful place called Fun Island.
 Pinocchio completely forgot about school and gave the fox his spelling book in exchange for a ticket to Fun Island.

- Where are you going, Pinocchio? - asked the fairy b.

- I'm going to school - Pinocchio lied.

Pinocchio's nose became very, very long.
 He wishes he hadn't lied. The fairy called a bird to peck her long nose because Pinocchio was very sorry.
  Pinocchio promised never to be naughty again and went straight to school.

At school, Pinocchio told his friend all about Fun Island.
 His friend wanted to go with him. Pinocchio and his companions boarded a ship heading to Fun Island.
  On the island, they did not know that boys were turned into donkeys and used for very hard work.

Pinocchio cried and wished he hadn't come to the island.
 He also wished he didn't look like a silly ass.
  The blue fairy heard his wish and with a wave of her magic wand his donkey ears and tail disappeared.
   Sad Pinocchio on the beach, sadly looking at the sea. He wondered if he would ever see Geppetto again.

Suddenly he saw Geppetto, who sailed out to sea in search of Pinocchio. Geppetto didn't see the huge whale behind him. The whale swallowed Geppetto and his boat.
 Pinocchio knew he needed to save Geppetto. He jumped into the water and swam with all his might.
  As he approached, the whale opened its mouth and Pinocchio walked straight in.
   Deep inside the whale's belly, Pinocchio and Geppetto hugged each other, happy to be together again.

- We need to find a way out - said Gepeto - we will make a fire with the wood from my boat.

The smoke made the whale sneeze. They left the whale's mouth and returned to the sea.
 Pinocchio and Geppetto swam safely to shore. They were both tired. They lay down on the sand and fell asleep.
  When Geppetto woke up, he saw that the blue fairy, as a reward for being so brave, had transformed Pinocchio into a real boy.

- Finally my wish came true!
Pinocchio

shouted Geppetto.

Once upon a time there was a carver named Geppetto.
 He made puppets out of pieces of wood and called his favorite puppet Pinocchio.

- I would love to be the father of a real boy like Pinocchio - he wished.

That night, the blue fairy, who knew that Geppetto was a good man, cast a spell on Pinocchio.
 The next day, Gappetto woke up and was very happy to discover that Pinocchio could walk, sit and talk like a real boy.

Geppetto wanted to send Pinocchio to school. He sold his only coat for a spelling book.

- Now you can go to school like a real boy - help Gappetto as we wave to Pinocchio.

 
On the way to school, Pinocchio stopped to watch a puppet show in a town.

- Would you like to participate in my puppet show? - asked the evil puppet master.

Pinocchio happily agreed. He was locked inside the evil puppet master's caravan.
 He wished he was safe with Geppetto. The blue fairy suddenly appeared.
  She listened to Pinocchio's desire and freed him. Pinocchio is happy to be free.

- I'm going straight to school - he said.

But he met an evil fox who told him about a wonderful place called Fun Island.
 Pinocchio completely forgot about school and gave the fox his spelling book in exchange for a ticket to Fun Island.

- Where are you going, Pinocchio? - asked the fairy b.

- I'm going to school - Pinocchio lied.

Pinocchio's nose became very, very long.
 He wishes he hadn't lied. The fairy called a bird to peck her long nose because Pinocchio was very sorry.
  Pinocchio promised never to be naughty again and went straight to school.

At school, Pinocchio told his friend all about Fun Island.
 His friend wanted to go with him. Pinocchio and his companions boarded a ship heading to Fun Island.
  On the island, they did not know that boys were turned into donkeys and used for very hard work.

Pinocchio cried and wished he hadn't come to the island.
 He also wished he didn't look like a silly ass.
  The blue fairy heard his wish and with a wave of her magic wand his donkey ears and tail disappeared.
   Sad Pinocchio on the beach, sadly looking at the sea. He wondered if he would ever see Geppetto again.

Suddenly he saw Geppetto, who sailed out to sea in search of Pinocchio. Geppetto didn't see the huge whale behind him. The whale swallowed Geppetto and his boat.
 Pinocchio knew he needed to save Geppetto. He jumped into the water and swam with all his might.
  As he approached, the whale opened its mouth and Pinocchio walked straight in.
   Deep inside the whale's belly, Pinocchio and Geppetto hugged each other, happy to be together again.

- We need to find a way out - said Gepeto - we will make a fire with the wood from my boat.

The smoke made the whale sneeze. They left the whale's mouth and returned to the sea.
 Pinocchio and Geppetto swam safely to shore. They were both tired. They lay down on the sand and fell asleep.
  When Geppetto woke up, he saw that the blue fairy, as a reward for being so brave, had transformed Pinocchio into a real boy.

- Finally my wish came true!
Pinocchio

shouted Geppetto.

Once upon a time there was a carver named Geppetto.
 He made puppets out of pieces of wood and called his favorite puppet Pinocchio.

- I would love to be the father of a real boy like Pinocchio - he wished.

That night, the blue fairy, who knew that Geppetto was a good man, cast a spell on Pinocchio.
 The next day, Gappetto woke up and was very happy to discover that Pinocchio could walk, sit and talk like a real boy.

Geppetto wanted to send Pinocchio to school. He sold his only coat for a spelling book.

- Now you can go to school like a real boy - help Gappetto as we wave to Pinocchio.

 
On the way to school, Pinocchio stopped to watch a puppet show in a town.

- Would you like to participate in my puppet show? - asked the evil puppet master.

Pinocchio happily agreed. He was locked inside the evil puppet master's caravan.
 He wished he was safe with Geppetto. The blue fairy suddenly appeared.
  She listened to Pinocchio's desire and freed him. Pinocchio is happy to be free.

- I'm going straight to school - he said.

But he met an evil fox who told him about a wonderful place called Fun Island.
 Pinocchio completely forgot about school and gave the fox his spelling book in exchange for a ticket to Fun Island.

- Where are you going, Pinocchio? - asked the fairy b.

- I'm going to school - Pinocchio lied.

Pinocchio's nose became very, very long.
 He wishes he hadn't lied. The fairy called a bird to peck her long nose because Pinocchio was very sorry.
  Pinocchio promised never to be naughty again and went straight to school.

At school, Pinocchio told his friend all about Fun Island.
 His friend wanted to go with him. Pinocchio and his companions boarded a ship heading to Fun Island.
  On the island, they did not know that boys were turned into donkeys and used for very hard work.

Pinocchio cried and wished he hadn't come to the island.
 He also wished he didn't look like a silly ass.
  The blue fairy heard his wish and with a wave of her magic wand his donkey ears and tail disappeared.
   Sad Pinocchio on the beach, sadly looking at the sea. He wondered if he would ever see Geppetto again.

Suddenly he saw Geppetto, who sailed out to sea in search of Pinocchio. Geppetto didn't see the huge whale behind him. The whale swallowed Geppetto and his boat.
 Pinocchio knew he needed to save Geppetto. He jumped into the water and swam with all his might.
  As he approached, the whale opened its mouth and Pinocchio walked straight in.
   Deep inside the whale's belly, Pinocchio and Geppetto hugged each other, happy to be together again.

- We need to find a way out - said Gepeto - we will make a fire with the wood from my boat.

The smoke made the whale sneeze. They left the whale's mouth and returned to the sea.
 Pinocchio and Geppetto swam safely to shore. They were both tired. They lay down on the sand and fell asleep.
  When Geppetto woke up, he saw that the blue fairy, as a reward for being so brave, had transformed Pinocchio into a real boy.

- Finally my wish came true!
Pinocchio

shouted Geppetto.

Once upon a time there was a carver named Geppetto.
 He made puppets out of pieces of wood and called his favorite puppet Pinocchio.

- I would love to be the father of a real boy like Pinocchio - he wished.

That night, the blue fairy, who knew that Geppetto was a good man, cast a spell on Pinocchio.
 The next day, Gappetto woke up and was very happy to discover that Pinocchio could walk, sit and talk like a real boy.

Geppetto wanted to send Pinocchio to school. He sold his only coat for a spelling book.

- Now you can go to school like a real boy - help Gappetto as we wave to Pinocchio.

 
On the way to school, Pinocchio stopped to watch a puppet show in a town.

- Would you like to participate in my puppet show? - asked the evil puppet master.

Pinocchio happily agreed. He was locked inside the evil puppet master's caravan.
 He wished he was safe with Geppetto. The blue fairy suddenly appeared.
  She listened to Pinocchio's desire and freed him. Pinocchio is happy to be free.

- I'm going straight to school - he said.

But he met an evil fox who told him about a wonderful place called Fun Island.
 Pinocchio completely forgot about school and gave the fox his spelling book in exchange for a ticket to Fun Island.

- Where are you going, Pinocchio? - asked the fairy b.

- I'm going to school - Pinocchio lied.

Pinocchio's nose became very, very long.
 He wishes he hadn't lied. The fairy called a bird to peck her long nose because Pinocchio was very sorry.
  Pinocchio promised never to be naughty again and went straight to school.

At school, Pinocchio told his friend all about Fun Island.
 His friend wanted to go with him. Pinocchio and his companions boarded a ship heading to Fun Island.
  On the island, they did not know that boys were turned into donkeys and used for very hard work.

Pinocchio cried and wished he hadn't come to the island.
 He also wished he didn't look like a silly ass.
  The blue fairy heard his wish and with a wave of her magic wand his donkey ears and tail disappeared.
   Sad Pinocchio on the beach, sadly looking at the sea. He wondered if he would ever see Geppetto again.

Suddenly he saw Geppetto, who sailed out to sea in search of Pinocchio. Geppetto didn't see the huge whale behind him. The whale swallowed Geppetto and his boat.
 Pinocchio knew he needed to save Geppetto. He jumped into the water and swam with all his might.
  As he approached, the whale opened its mouth and Pinocchio walked straight in.
   Deep inside the whale's belly, Pinocchio and Geppetto hugged each other, happy to be together again.

- We need to find a way out - said Gepeto - we will make a fire with the wood from my boat.

The smoke made the whale sneeze. They left the whale's mouth and returned to the sea.
 Pinocchio and Geppetto swam safely to shore. They were both tired. They lay down on the sand and fell asleep.
  When Geppetto woke up, he saw that the blue fairy, as a reward for being so brave, had transformed Pinocchio into a real boy.

- Finally my wish came true!
Pinocchio

shouted Geppetto.

Once upon a time there was a carver named Geppetto.
 He made puppets out of pieces of wood and called his favorite puppet Pinocchio.

- I would love to be the father of a real boy like Pinocchio - he wished.

That night, the blue fairy, who knew that Geppetto was a good man, cast a spell on Pinocchio.
 The next day, Gappetto woke up and was very happy to discover that Pinocchio could walk, sit and talk like a real boy.

Geppetto wanted to send Pinocchio to school. He sold his only coat for a spelling book.

- Now you can go to school like a real boy - help Gappetto as we wave to Pinocchio.

 
On the way to school, Pinocchio stopped to watch a puppet show in a town.

- Would you like to participate in my puppet show? - asked the evil puppet master.

Pinocchio happily agreed. He was locked inside the evil puppet master's caravan.
 He wished he was safe with Geppetto. The blue fairy suddenly appeared.
  She listened to Pinocchio's desire and freed him. Pinocchio is happy to be free.

- I'm going straight to school - he said.

But he met an evil fox who told him about a wonderful place called Fun Island.
 Pinocchio completely forgot about school and gave the fox his spelling book in exchange for a ticket to Fun Island.

- Where are you going, Pinocchio? - asked the fairy b.

- I'm going to school - Pinocchio lied.

Pinocchio's nose became very, very long.
 He wishes he hadn't lied. The fairy called a bird to peck her long nose because Pinocchio was very sorry.
  Pinocchio promised never to be naughty again and went straight to school.

At school, Pinocchio told his friend all about Fun Island.
 His friend wanted to go with him. Pinocchio and his companions boarded a ship heading to Fun Island.
  On the island, they did not know that boys were turned into donkeys and used for very hard work.

Pinocchio cried and wished he hadn't come to the island.
 He also wished he didn't look like a silly ass.
  The blue fairy heard his wish and with a wave of her magic wand his donkey ears and tail disappeared.
   Sad Pinocchio on the beach, sadly looking at the sea. He wondered if he would ever see Geppetto again.

Suddenly he saw Geppetto, who sailed out to sea in search of Pinocchio. Geppetto didn't see the huge whale behind him. The whale swallowed Geppetto and his boat.
 Pinocchio knew he needed to save Geppetto. He jumped into the water and swam with all his might.
  As he approached, the whale opened its mouth and Pinocchio walked straight in.
   Deep inside the whale's belly, Pinocchio and Geppetto hugged each other, happy to be together again.

- We need to find a way out - said Gepeto - we will make a fire with the wood from my boat.

The smoke made the whale sneeze. They left the whale's mouth and returned to the sea.
 Pinocchio and Geppetto swam safely to shore. They were both tired. They lay down on the sand and fell asleep.
  When Geppetto woke up, he saw that the blue fairy, as a reward for being so brave, had transformed Pinocchio into a real boy.

- Finally my wish came true!
Pinocchio

shouted Geppetto.

Once upon a time there was a carver named Geppetto.
 He made puppets out of pieces of wood and called his favorite puppet Pinocchio.

- I would love to be the father of a real boy like Pinocchio - he wished.

That night, the blue fairy, who knew that Geppetto was a good man, cast a spell on Pinocchio.
 The next day, Gappetto woke up and was very happy to discover that Pinocchio could walk, sit and talk like a real boy.

Geppetto wanted to send Pinocchio to school. He sold his only coat for a spelling book.

- Now you can go to school like a real boy - help Gappetto as we wave to Pinocchio.

 
On the way to school, Pinocchio stopped to watch a puppet show in a town.

- Would you like to participate in my puppet show? - asked the evil puppet master.

Pinocchio happily agreed. He was locked inside the evil puppet master's caravan.
 He wished he was safe with Geppetto. The blue fairy suddenly appeared.
  She listened to Pinocchio's desire and freed him. Pinocchio is happy to be free.

- I'm going straight to school - he said.

But he met an evil fox who told him about a wonderful place called Fun Island.
 Pinocchio completely forgot about school and gave the fox his spelling book in exchange for a ticket to Fun Island.

- Where are you going, Pinocchio? - asked the fairy b.

- I'm going to school - Pinocchio lied.

Pinocchio's nose became very, very long.
 He wishes he hadn't lied. The fairy called a bird to peck her long nose because Pinocchio was very sorry.
  Pinocchio promised never to be naughty again and went straight to school.

At school, Pinocchio told his friend all about Fun Island.
 His friend wanted to go with him. Pinocchio and his companions boarded a ship heading to Fun Island.
  On the island, they did not know that boys were turned into donkeys and used for very hard work.

Pinocchio cried and wished he hadn't come to the island.
 He also wished he didn't look like a silly ass.
  The blue fairy heard his wish and with a wave of her magic wand his donkey ears and tail disappeared.
   Sad Pinocchio on the beach, sadly looking at the sea. He wondered if he would ever see Geppetto again.

Suddenly he saw Geppetto, who sailed out to sea in search of Pinocchio. Geppetto didn't see the huge whale behind him. The whale swallowed Geppetto and his boat.
 Pinocchio knew he needed to save Geppetto. He jumped into the water and swam with all his might.
  As he approached, the whale opened its mouth and Pinocchio walked straight in.
   Deep inside the whale's belly, Pinocchio and Geppetto hugged each other, happy to be together again.

- We need to find a way out - said Gepeto - we will make a fire with the wood from my boat.

The smoke made the whale sneeze. They left the whale's mouth and returned to the sea.
 Pinocchio and Geppetto swam safely to shore. They were both tired. They lay down on the sand and fell asleep.
  When Geppetto woke up, he saw that the blue fairy, as a reward for being so brave, had transformed Pinocchio into a real boy.

- Finally my wish came true!
Pinocchio

shouted Geppetto.

Once upon a time there was a carver named Geppetto.
 He made puppets out of pieces of wood and called his favorite puppet Pinocchio.

- I would love to be the father of a real boy like Pinocchio - he wished.

That night, the blue fairy, who knew that Geppetto was a good man, cast a spell on Pinocchio.
 The next day, Gappetto woke up and was very happy to discover that Pinocchio could walk, sit and talk like a real boy.

Geppetto wanted to send Pinocchio to school. He sold his only coat for a spelling book.

- Now you can go to school like a real boy - help Gappetto as we wave to Pinocchio.

 
On the way to school, Pinocchio stopped to watch a puppet show in a town.

- Would you like to participate in my puppet show? - asked the evil puppet master.

Pinocchio happily agreed. He was locked inside the evil puppet master's caravan.
 He wished he was safe with Geppetto. The blue fairy suddenly appeared.
  She listened to Pinocchio's desire and freed him. Pinocchio is happy to be free.

- I'm going straight to school - he said.

But he met an evil fox who told him about a wonderful place called Fun Island.
 Pinocchio completely forgot about school and gave the fox his spelling book in exchange for a ticket to Fun Island.

- Where are you going, Pinocchio? - asked the fairy b.

- I'm going to school - Pinocchio lied.

Pinocchio's nose became very, very long.
 He wishes he hadn't lied. The fairy called a bird to peck her long nose because Pinocchio was very sorry.
  Pinocchio promised never to be naughty again and went straight to school.

At school, Pinocchio told his friend all about Fun Island.
 His friend wanted to go with him. Pinocchio and his companions boarded a ship heading to Fun Island.
  On the island, they did not know that boys were turned into donkeys and used for very hard work.

Pinocchio cried and wished he hadn't come to the island.
 He also wished he didn't look like a silly ass.
  The blue fairy heard his wish and with a wave of her magic wand his donkey ears and tail disappeared.
   Sad Pinocchio on the beach, sadly looking at the sea. He wondered if he would ever see Geppetto again.

Suddenly he saw Geppetto, who sailed out to sea in search of Pinocchio. Geppetto didn't see the huge whale behind him. The whale swallowed Geppetto and his boat.
 Pinocchio knew he needed to save Geppetto. He jumped into the water and swam with all his might.
  As he approached, the whale opened its mouth and Pinocchio walked straight in.
   Deep inside the whale's belly, Pinocchio and Geppetto hugged each other, happy to be together again.

- We need to find a way out - said Gepeto - we will make a fire with the wood from my boat.

The smoke made the whale sneeze. They left the whale's mouth and returned to the sea.
 Pinocchio and Geppetto swam safely to shore. They were both tired. They lay down on the sand and fell asleep.
  When Geppetto woke up, he saw that the blue fairy, as a reward for being so brave, had transformed Pinocchio into a real boy.

- Finally my wish came true!
Pinocchio

shouted Geppetto.

Once upon a time there was a carver named Geppetto.
 He made puppets out of pieces of wood and called his favorite puppet Pinocchio.

- I would love to be the father of a real boy like Pinocchio - he wished.

That night, the blue fairy, who knew that Geppetto was a good man, cast a spell on Pinocchio.
 The next day, Gappetto woke up and was very happy to discover that Pinocchio could walk, sit and talk like a real boy.

Geppetto wanted to send Pinocchio to school. He sold his only coat for a spelling book.

- Now you can go to school like a real boy - help Gappetto as we wave to Pinocchio.

 
On the way to school, Pinocchio stopped to watch a puppet show in a town.

- Would you like to participate in my puppet show? - asked the evil puppet master.

Pinocchio happily agreed. He was locked inside the evil puppet master's caravan.
 He wished he was safe with Geppetto. The blue fairy suddenly appeared.
  She listened to Pinocchio's desire and freed him. Pinocchio is happy to be free.

- I'm going straight to school - he said.

But he met an evil fox who told him about a wonderful place called Fun Island.
 Pinocchio completely forgot about school and gave the fox his spelling book in exchange for a ticket to Fun Island.

- Where are you going, Pinocchio? - asked the fairy b.

- I'm going to school - Pinocchio lied.

Pinocchio's nose became very, very long.
 He wishes he hadn't lied. The fairy called a bird to peck her long nose because Pinocchio was very sorry.
  Pinocchio promised never to be naughty again and went straight to school.

At school, Pinocchio told his friend all about Fun Island.
 His friend wanted to go with him. Pinocchio and his companions boarded a ship heading to Fun Island.
  On the island, they did not know that boys were turned into donkeys and used for very hard work.

Pinocchio cried and wished he hadn't come to the island.
 He also wished he didn't look like a silly ass.
  The blue fairy heard his wish and with a wave of her magic wand his donkey ears and tail disappeared.
   Sad Pinocchio on the beach, sadly looking at the sea. He wondered if he would ever see Geppetto again.

Suddenly he saw Geppetto, who sailed out to sea in search of Pinocchio. Geppetto didn't see the huge whale behind him. The whale swallowed Geppetto and his boat.
 Pinocchio knew he needed to save Geppetto. He jumped into the water and swam with all his might.
  As he approached, the whale opened its mouth and Pinocchio walked straight in.
   Deep inside the whale's belly, Pinocchio and Geppetto hugged each other, happy to be together again.

- We need to find a way out - said Gepeto - we will make a fire with the wood from my boat.

The smoke made the whale sneeze. They left the whale's mouth and returned to the sea.
 Pinocchio and Geppetto swam safely to shore. They were both tired. They lay down on the sand and fell asleep.
  When Geppetto woke up, he saw that the blue fairy, as a reward for being so brave, had transformed Pinocchio into a real boy.

- Finally my wish came true!
Pinocchio

shouted Geppetto.

Once upon a time there was a carver named Geppetto.
 He made puppets out of pieces of wood and called his favorite puppet Pinocchio.

- I would love to be the father of a real boy like Pinocchio - he wished.

That night, the blue fairy, who knew that Geppetto was a good man, cast a spell on Pinocchio.
 The next day, Gappetto woke up and was very happy to discover that Pinocchio could walk, sit and talk like a real boy.

Geppetto wanted to send Pinocchio to school. He sold his only coat for a spelling book.

- Now you can go to school like a real boy - help Gappetto as we wave to Pinocchio.

 
On the way to school, Pinocchio stopped to watch a puppet show in a town.

- Would you like to participate in my puppet show? - asked the evil puppet master.

Pinocchio happily agreed. He was locked inside the evil puppet master's caravan.
 He wished he was safe with Geppetto. The blue fairy suddenly appeared.
  She listened to Pinocchio's desire and freed him. Pinocchio is happy to be free.

- I'm going straight to school - he said.

But he met an evil fox who told him about a wonderful place called Fun Island.
 Pinocchio completely forgot about school and gave the fox his spelling book in exchange for a ticket to Fun Island.

- Where are you going, Pinocchio? - asked the fairy b.

- I'm going to school - Pinocchio lied.

Pinocchio's nose became very, very long.
 He wishes he hadn't lied. The fairy called a bird to peck her long nose because Pinocchio was very sorry.
  Pinocchio promised never to be naughty again and went straight to school.

At school, Pinocchio told his friend all about Fun Island.
 His friend wanted to go with him. Pinocchio and his companions boarded a ship heading to Fun Island.
  On the island, they did not know that boys were turned into donkeys and used for very hard work.

Pinocchio cried and wished he hadn't come to the island.
 He also wished he didn't look like a silly ass.
  The blue fairy heard his wish and with a wave of her magic wand his donkey ears and tail disappeared.
   Sad Pinocchio on the beach, sadly looking at the sea. He wondered if he would ever see Geppetto again.

Suddenly he saw Geppetto, who sailed out to sea in search of Pinocchio. Geppetto didn't see the huge whale behind him. The whale swallowed Geppetto and his boat.
 Pinocchio knew he needed to save Geppetto. He jumped into the water and swam with all his might.
  As he approached, the whale opened its mouth and Pinocchio walked straight in.
   Deep inside the whale's belly, Pinocchio and Geppetto hugged each other, happy to be together again.

- We need to find a way out - said Gepeto - we will make a fire with the wood from my boat.

The smoke made the whale sneeze. They left the whale's mouth and returned to the sea.
 Pinocchio and Geppetto swam safely to shore. They were both tired. They lay down on the sand and fell asleep.
  When Geppetto woke up, he saw that the blue fairy, as a reward for being so brave, had transformed Pinocchio into a real boy.

- Finally my wish came true!
Pinocchio

shouted Geppetto.

Once upon a time there was a carver named Geppetto.
 He made puppets out of pieces of wood and called his favorite puppet Pinocchio.

- I would love to be the father of a real boy like Pinocchio - he wished.

That night, the blue fairy, who knew that Geppetto was a good man, cast a spell on Pinocchio.
 The next day, Gappetto woke up and was very happy to discover that Pinocchio could walk, sit and talk like a real boy.

Geppetto wanted to send Pinocchio to school. He sold his only coat for a spelling book.

- Now you can go to school like a real boy - help Gappetto as we wave to Pinocchio.

 
On the way to school, Pinocchio stopped to watch a puppet show in a town.

- Would you like to participate in my puppet show? - asked the evil puppet master.

Pinocchio happily agreed. He was locked inside the evil puppet master's caravan.
 He wished he was safe with Geppetto. The blue fairy suddenly appeared.
  She listened to Pinocchio's desire and freed him. Pinocchio is happy to be free.

- I'm going straight to school - he said.

But he met an evil fox who told him about a wonderful place called Fun Island.
 Pinocchio completely forgot about school and gave the fox his spelling book in exchange for a ticket to Fun Island.

- Where are you going, Pinocchio? - asked the fairy b.

- I'm going to school - Pinocchio lied.

Pinocchio's nose became very, very long.
 He wishes he hadn't lied. The fairy called a bird to peck her long nose because Pinocchio was very sorry.
  Pinocchio promised never to be naughty again and went straight to school.

At school, Pinocchio told his friend all about Fun Island.
 His friend wanted to go with him. Pinocchio and his companions boarded a ship heading to Fun Island.
  On the island, they did not know that boys were turned into donkeys and used for very hard work.

Pinocchio cried and wished he hadn't come to the island.
 He also wished he didn't look like a silly ass.
  The blue fairy heard his wish and with a wave of her magic wand his donkey ears and tail disappeared.
   Sad Pinocchio on the beach, sadly looking at the sea. He wondered if he would ever see Geppetto again.

Suddenly he saw Geppetto, who sailed out to sea in search of Pinocchio. Geppetto didn't see the huge whale behind him. The whale swallowed Geppetto and his boat.
 Pinocchio knew he needed to save Geppetto. He jumped into the water and swam with all his might.
  As he approached, the whale opened its mouth and Pinocchio walked straight in.
   Deep inside the whale's belly, Pinocchio and Geppetto hugged each other, happy to be together again.

- We need to find a way out - said Gepeto - we will make a fire with the wood from my boat.

The smoke made the whale sneeze. They left the whale's mouth and returned to the sea.
 Pinocchio and Geppetto swam safely to shore. They were both tired. They lay down on the sand and fell asleep.
  When Geppetto woke up, he saw that the blue fairy, as a reward for being so brave, had transformed Pinocchio into a real boy.

- Finally my wish came true!
Pinocchio

shouted Geppetto.

Once upon a time there was a carver named Geppetto.
 He made puppets out of pieces of wood and called his favorite puppet Pinocchio.

- I would love to be the father of a real boy like Pinocchio - he wished.

That night, the blue fairy, who knew that Geppetto was a good man, cast a spell on Pinocchio.
 The next day, Gappetto woke up and was very happy to discover that Pinocchio could walk, sit and talk like a real boy.

Geppetto wanted to send Pinocchio to school. He sold his only coat for a spelling book.

- Now you can go to school like a real boy - help Gappetto as we wave to Pinocchio.

 
On the way to school, Pinocchio stopped to watch a puppet show in a town.

- Would you like to participate in my puppet show? - asked the evil puppet master.

Pinocchio happily agreed. He was locked inside the evil puppet master's caravan.
 He wished he was safe with Geppetto. The blue fairy suddenly appeared.
  She listened to Pinocchio's desire and freed him. Pinocchio is happy to be free.

- I'm going straight to school - he said.

But he met an evil fox who told him about a wonderful place called Fun Island.
 Pinocchio completely forgot about school and gave the fox his spelling book in exchange for a ticket to Fun Island.

- Where are you going, Pinocchio? - asked the fairy b.

- I'm going to school - Pinocchio lied.

Pinocchio's nose became very, very long.
 He wishes he hadn't lied. The fairy called a bird to peck her long nose because Pinocchio was very sorry.
  Pinocchio promised never to be naughty again and went straight to school.

At school, Pinocchio told his friend all about Fun Island.
 His friend wanted to go with him. Pinocchio and his companions boarded a ship heading to Fun Island.
  On the island, they did not know that boys were turned into donkeys and used for very hard work.

Pinocchio cried and wished he hadn't come to the island.
 He also wished he didn't look like a silly ass.
  The blue fairy heard his wish and with a wave of her magic wand his donkey ears and tail disappeared.
   Sad Pinocchio on the beach, sadly looking at the sea. He wondered if he would ever see Geppetto again.

Suddenly he saw Geppetto, who sailed out to sea in search of Pinocchio. Geppetto didn't see the huge whale behind him. The whale swallowed Geppetto and his boat.
 Pinocchio knew he needed to save Geppetto. He jumped into the water and swam with all his might.
  As he approached, the whale opened its mouth and Pinocchio walked straight in.
   Deep inside the whale's belly, Pinocchio and Geppetto hugged each other, happy to be together again.

- We need to find a way out - said Gepeto - we will make a fire with the wood from my boat.

The smoke made the whale sneeze. They left the whale's mouth and returned to the sea.
 Pinocchio and Geppetto swam safely to shore. They were both tired. They lay down on the sand and fell asleep.
  When Geppetto woke up, he saw that the blue fairy, as a reward for being so brave, had transformed Pinocchio into a real boy.

- Finally my wish came true!
Pinocchio

shouted Geppetto.

Once upon a time there was a carver named Geppetto.
 He made puppets out of pieces of wood and called his favorite puppet Pinocchio.

- I would love to be the father of a real boy like Pinocchio - he wished.

That night, the blue fairy, who knew that Geppetto was a good man, cast a spell on Pinocchio.
 The next day, Gappetto woke up and was very happy to discover that Pinocchio could walk, sit and talk like a real boy.

Geppetto wanted to send Pinocchio to school. He sold his only coat for a spelling book.

- Now you can go to school like a real boy - help Gappetto as we wave to Pinocchio.

 
On the way to school, Pinocchio stopped to watch a puppet show in a town.

- Would you like to participate in my puppet show? - asked the evil puppet master.

Pinocchio happily agreed. He was locked inside the evil puppet master's caravan.
 He wished he was safe with Geppetto. The blue fairy suddenly appeared.
  She listened to Pinocchio's desire and freed him. Pinocchio is happy to be free.

- I'm going straight to school - he said.

But he met an evil fox who told him about a wonderful place called Fun Island.
 Pinocchio completely forgot about school and gave the fox his spelling book in exchange for a ticket to Fun Island.

- Where are you going, Pinocchio? - asked the fairy b.

- I'm going to school - Pinocchio lied.

Pinocchio's nose became very, very long.
 He wishes he hadn't lied. The fairy called a bird to peck her long nose because Pinocchio was very sorry.
  Pinocchio promised never to be naughty again and went straight to school.

At school, Pinocchio told his friend all about Fun Island.
 His friend wanted to go with him. Pinocchio and his companions boarded a ship heading to Fun Island.
  On the island, they did not know that boys were turned into donkeys and used for very hard work.

Pinocchio cried and wished he hadn't come to the island.
 He also wished he didn't look like a silly ass.
  The blue fairy heard his wish and with a wave of her magic wand his donkey ears and tail disappeared.
   Sad Pinocchio on the beach, sadly looking at the sea. He wondered if he would ever see Geppetto again.

Suddenly he saw Geppetto, who sailed out to sea in search of Pinocchio. Geppetto didn't see the huge whale behind him. The whale swallowed Geppetto and his boat.
 Pinocchio knew he needed to save Geppetto. He jumped into the water and swam with all his might.
  As he approached, the whale opened its mouth and Pinocchio walked straight in.
   Deep inside the whale's belly, Pinocchio and Geppetto hugged each other, happy to be together again.

- We need to find a way out - said Gepeto - we will make a fire with the wood from my boat.

The smoke made the whale sneeze. They left the whale's mouth and returned to the sea.
 Pinocchio and Geppetto swam safely to shore. They were both tired. They lay down on the sand and fell asleep.
  When Geppetto woke up, he saw that the blue fairy, as a reward for being so brave, had transformed Pinocchio into a real boy.

- Finally my wish came true!
Pinocchio

shouted Geppetto.

Once upon a time there was a carver named Geppetto.
 He made puppets out of pieces of wood and called his favorite puppet Pinocchio.

- I would love to be the father of a real boy like Pinocchio - he wished.

That night, the blue fairy, who knew that Geppetto was a good man, cast a spell on Pinocchio.
 The next day, Gappetto woke up and was very happy to discover that Pinocchio could walk, sit and talk like a real boy.

Geppetto wanted to send Pinocchio to school. He sold his only coat for a spelling book.

- Now you can go to school like a real boy - help Gappetto as we wave to Pinocchio.

 
On the way to school, Pinocchio stopped to watch a puppet show in a town.

- Would you like to participate in my puppet show? - asked the evil puppet master.

Pinocchio happily agreed. He was locked inside the evil puppet master's caravan.
 He wished he was safe with Geppetto. The blue fairy suddenly appeared.
  She listened to Pinocchio's desire and freed him. Pinocchio is happy to be free.

- I'm going straight to school - he said.

But he met an evil fox who told him about a wonderful place called Fun Island.
 Pinocchio completely forgot about school and gave the fox his spelling book in exchange for a ticket to Fun Island.

- Where are you going, Pinocchio? - asked the fairy b.

- I'm going to school - Pinocchio lied.

Pinocchio's nose became very, very long.
 He wishes he hadn't lied. The fairy called a bird to peck her long nose because Pinocchio was very sorry.
  Pinocchio promised never to be naughty again and went straight to school.

At school, Pinocchio told his friend all about Fun Island.
 His friend wanted to go with him. Pinocchio and his companions boarded a ship heading to Fun Island.
  On the island, they did not know that boys were turned into donkeys and used for very hard work.

Pinocchio cried and wished he hadn't come to the island.
 He also wished he didn't look like a silly ass.
  The blue fairy heard his wish and with a wave of her magic wand his donkey ears and tail disappeared.
   Sad Pinocchio on the beach, sadly looking at the sea. He wondered if he would ever see Geppetto again.

Suddenly he saw Geppetto, who sailed out to sea in search of Pinocchio. Geppetto didn't see the huge whale behind him. The whale swallowed Geppetto and his boat.
 Pinocchio knew he needed to save Geppetto. He jumped into the water and swam with all his might.
  As he approached, the whale opened its mouth and Pinocchio walked straight in.
   Deep inside the whale's belly, Pinocchio and Geppetto hugged each other, happy to be together again.

- We need to find a way out - said Gepeto - we will make a fire with the wood from my boat.

The smoke made the whale sneeze. They left the whale's mouth and returned to the sea.
 Pinocchio and Geppetto swam safely to shore. They were both tired. They lay down on the sand and fell asleep.
  When Geppetto woke up, he saw that the blue fairy, as a reward for being so brave, had transformed Pinocchio into a real boy.

- Finally my wish came true!
Pinocchio

shouted Geppetto.

Once upon a time there was a carver named Geppetto.
 He made puppets out of pieces of wood and called his favorite puppet Pinocchio.

- I would love to be the father of a real boy like Pinocchio - he wished.

That night, the blue fairy, who knew that Geppetto was a good man, cast a spell on Pinocchio.
 The next day, Gappetto woke up and was very happy to discover that Pinocchio could walk, sit and talk like a real boy.

Geppetto wanted to send Pinocchio to school. He sold his only coat for a spelling book.

- Now you can go to school like a real boy - help Gappetto as we wave to Pinocchio.

 
On the way to school, Pinocchio stopped to watch a puppet show in a town.

- Would you like to participate in my puppet show? - asked the evil puppet master.

Pinocchio happily agreed. He was locked inside the evil puppet master's caravan.
 He wished he was safe with Geppetto. The blue fairy suddenly appeared.
  She listened to Pinocchio's desire and freed him. Pinocchio is happy to be free.

- I'm going straight to school - he said.

But he met an evil fox who told him about a wonderful place called Fun Island.
 Pinocchio completely forgot about school and gave the fox his spelling book in exchange for a ticket to Fun Island.

- Where are you going, Pinocchio? - asked the fairy b.

- I'm going to school - Pinocchio lied.

Pinocchio's nose became very, very long.
 He wishes he hadn't lied. The fairy called a bird to peck her long nose because Pinocchio was very sorry.
  Pinocchio promised never to be naughty again and went straight to school.

At school, Pinocchio told his friend all about Fun Island.
 His friend wanted to go with him. Pinocchio and his companions boarded a ship heading to Fun Island.
  On the island, they did not know that boys were turned into donkeys and used for very hard work.

Pinocchio cried and wished he hadn't come to the island.
 He also wished he didn't look like a silly ass.
  The blue fairy heard his wish and with a wave of her magic wand his donkey ears and tail disappeared.
   Sad Pinocchio on the beach, sadly looking at the sea. He wondered if he would ever see Geppetto again.

Suddenly he saw Geppetto, who sailed out to sea in search of Pinocchio. Geppetto didn't see the huge whale behind him. The whale swallowed Geppetto and his boat.
 Pinocchio knew he needed to save Geppetto. He jumped into the water and swam with all his might.
  As he approached, the whale opened its mouth and Pinocchio walked straight in.
   Deep inside the whale's belly, Pinocchio and Geppetto hugged each other, happy to be together again.

- We need to find a way out - said Gepeto - we will make a fire with the wood from my boat.

The smoke made the whale sneeze. They left the whale's mouth and returned to the sea.
 Pinocchio and Geppetto swam safely to shore. They were both tired. They lay down on the sand and fell asleep.
  When Geppetto woke up, he saw that the blue fairy, as a reward for being so brave, had transformed Pinocchio into a real boy.

- Finally my wish came true!
Pinocchio

shouted Geppetto.

Once upon a time there was a carver named Geppetto.
 He made puppets out of pieces of wood and called his favorite puppet Pinocchio.

- I would love to be the father of a real boy like Pinocchio - he wished.

That night, the blue fairy, who knew that Geppetto was a good man, cast a spell on Pinocchio.
 The next day, Gappetto woke up and was very happy to discover that Pinocchio could walk, sit and talk like a real boy.

Geppetto wanted to send Pinocchio to school. He sold his only coat for a spelling book.

- Now you can go to school like a real boy - help Gappetto as we wave to Pinocchio.

 
On the way to school, Pinocchio stopped to watch a puppet show in a town.

- Would you like to participate in my puppet show? - asked the evil puppet master.

Pinocchio happily agreed. He was locked inside the evil puppet master's caravan.
 He wished he was safe with Geppetto. The blue fairy suddenly appeared.
  She listened to Pinocchio's desire and freed him. Pinocchio is happy to be free.

- I'm going straight to school - he said.

But he met an evil fox who told him about a wonderful place called Fun Island.
 Pinocchio completely forgot about school and gave the fox his spelling book in exchange for a ticket to Fun Island.

- Where are you going, Pinocchio? - asked the fairy b.

- I'm going to school - Pinocchio lied.

Pinocchio's nose became very, very long.
 He wishes he hadn't lied. The fairy called a bird to peck her long nose because Pinocchio was very sorry.
  Pinocchio promised never to be naughty again and went straight to school.

At school, Pinocchio told his friend all about Fun Island.
 His friend wanted to go with him. Pinocchio and his companions boarded a ship heading to Fun Island.
  On the island, they did not know that boys were turned into donkeys and used for very hard work.

Pinocchio cried and wished he hadn't come to the island.
 He also wished he didn't look like a silly ass.
  The blue fairy heard his wish and with a wave of her magic wand his donkey ears and tail disappeared.
   Sad Pinocchio on the beach, sadly looking at the sea. He wondered if he would ever see Geppetto again.

Suddenly he saw Geppetto, who sailed out to sea in search of Pinocchio. Geppetto didn't see the huge whale behind him. The whale swallowed Geppetto and his boat.
 Pinocchio knew he needed to save Geppetto. He jumped into the water and swam with all his might.
  As he approached, the whale opened its mouth and Pinocchio walked straight in.
   Deep inside the whale's belly, Pinocchio and Geppetto hugged each other, happy to be together again.

- We need to find a way out - said Gepeto - we will make a fire with the wood from my boat.

The smoke made the whale sneeze. They left the whale's mouth and returned to the sea.
 Pinocchio and Geppetto swam safely to shore. They were both tired. They lay down on the sand and fell asleep.
  When Geppetto woke up, he saw that the blue fairy, as a reward for being so brave, had transformed Pinocchio into a real boy.

- Finally my wish came true!
Pinocchio

shouted Geppetto.

Once upon a time there was a carver named Geppetto.
 He made puppets out of pieces of wood and called his favorite puppet Pinocchio.

- I would love to be the father of a real boy like Pinocchio - he wished.

That night, the blue fairy, who knew that Geppetto was a good man, cast a spell on Pinocchio.
 The next day, Gappetto woke up and was very happy to discover that Pinocchio could walk, sit and talk like a real boy.

Geppetto wanted to send Pinocchio to school. He sold his only coat for a spelling book.

- Now you can go to school like a real boy - help Gappetto as we wave to Pinocchio.

 
On the way to school, Pinocchio stopped to watch a puppet show in a town.

- Would you like to participate in my puppet show? - asked the evil puppet master.

Pinocchio happily agreed. He was locked inside the evil puppet master's caravan.
 He wished he was safe with Geppetto. The blue fairy suddenly appeared.
  She listened to Pinocchio's desire and freed him. Pinocchio is happy to be free.

- I'm going straight to school - he said.

But he met an evil fox who told him about a wonderful place called Fun Island.
 Pinocchio completely forgot about school and gave the fox his spelling book in exchange for a ticket to Fun Island.

- Where are you going, Pinocchio? - asked the fairy b.

- I'm going to school - Pinocchio lied.

Pinocchio's nose became very, very long.
 He wishes he hadn't lied. The fairy called a bird to peck her long nose because Pinocchio was very sorry.
  Pinocchio promised never to be naughty again and went straight to school.

At school, Pinocchio told his friend all about Fun Island.
 His friend wanted to go with him. Pinocchio and his companions boarded a ship heading to Fun Island.
  On the island, they did not know that boys were turned into donkeys and used for very hard work.

Pinocchio cried and wished he hadn't come to the island.
 He also wished he didn't look like a silly ass.
  The blue fairy heard his wish and with a wave of her magic wand his donkey ears and tail disappeared.
   Sad Pinocchio on the beach, sadly looking at the sea. He wondered if he would ever see Geppetto again.

Suddenly he saw Geppetto, who sailed out to sea in search of Pinocchio. Geppetto didn't see the huge whale behind him. The whale swallowed Geppetto and his boat.
 Pinocchio knew he needed to save Geppetto. He jumped into the water and swam with all his might.
  As he approached, the whale opened its mouth and Pinocchio walked straight in.
   Deep inside the whale's belly, Pinocchio and Geppetto hugged each other, happy to be together again.

- We need to find a way out - said Gepeto - we will make a fire with the wood from my boat.

The smoke made the whale sneeze. They left the whale's mouth and returned to the sea.
 Pinocchio and Geppetto swam safely to shore. They were both tired. They lay down on the sand and fell asleep.
  When Geppetto woke up, he saw that the blue fairy, as a reward for being so brave, had transformed Pinocchio into a real boy.

- Finally my wish came true!
Pinocchio

shouted Geppetto.

Once upon a time there was a carver named Geppetto.
 He made puppets out of pieces of wood and called his favorite puppet Pinocchio.

- I would love to be the father of a real boy like Pinocchio - he wished.

That night, the blue fairy, who knew that Geppetto was a good man, cast a spell on Pinocchio.
 The next day, Gappetto woke up and was very happy to discover that Pinocchio could walk, sit and talk like a real boy.

Geppetto wanted to send Pinocchio to school. He sold his only coat for a spelling book.

- Now you can go to school like a real boy - help Gappetto as we wave to Pinocchio.

 
On the way to school, Pinocchio stopped to watch a puppet show in a town.

- Would you like to participate in my puppet show? - asked the evil puppet master.

Pinocchio happily agreed. He was locked inside the evil puppet master's caravan.
 He wished he was safe with Geppetto. The blue fairy suddenly appeared.
  She listened to Pinocchio's desire and freed him. Pinocchio is happy to be free.

- I'm going straight to school - he said.

But he met an evil fox who told him about a wonderful place called Fun Island.
 Pinocchio completely forgot about school and gave the fox his spelling book in exchange for a ticket to Fun Island.

- Where are you going, Pinocchio? - asked the fairy b.

- I'm going to school - Pinocchio lied.

Pinocchio's nose became very, very long.
 He wishes he hadn't lied. The fairy called a bird to peck her long nose because Pinocchio was very sorry.
  Pinocchio promised never to be naughty again and went straight to school.

At school, Pinocchio told his friend all about Fun Island.
 His friend wanted to go with him. Pinocchio and his companions boarded a ship heading to Fun Island.
  On the island, they did not know that boys were turned into donkeys and used for very hard work.

Pinocchio cried and wished he hadn't come to the island.
 He also wished he didn't look like a silly ass.
  The blue fairy heard his wish and with a wave of her magic wand his donkey ears and tail disappeared.
   Sad Pinocchio on the beach, sadly looking at the sea. He wondered if he would ever see Geppetto again.

Suddenly he saw Geppetto, who sailed out to sea in search of Pinocchio. Geppetto didn't see the huge whale behind him. The whale swallowed Geppetto and his boat.
 Pinocchio knew he needed to save Geppetto. He jumped into the water and swam with all his might.
  As he approached, the whale opened its mouth and Pinocchio walked straight in.
   Deep inside the whale's belly, Pinocchio and Geppetto hugged each other, happy to be together again.

- We need to find a way out - said Gepeto - we will make a fire with the wood from my boat.

The smoke made the whale sneeze. They left the whale's mouth and returned to the sea.
 Pinocchio and Geppetto swam safely to shore. They were both tired. They lay down on the sand and fell asleep.
  When Geppetto woke up, he saw that the blue fairy, as a reward for being so brave, had transformed Pinocchio into a real boy.

- Finally my wish came true!
Pinocchio

shouted Geppetto.

Once upon a time there was a carver named Geppetto.
 He made puppets out of pieces of wood and called his favorite puppet Pinocchio.

- I would love to be the father of a real boy like Pinocchio - he wished.

That night, the blue fairy, who knew that Geppetto was a good man, cast a spell on Pinocchio.
 The next day, Gappetto woke up and was very happy to discover that Pinocchio could walk, sit and talk like a real boy.

Geppetto wanted to send Pinocchio to school. He sold his only coat for a spelling book.

- Now you can go to school like a real boy - help Gappetto as we wave to Pinocchio.

 
On the way to school, Pinocchio stopped to watch a puppet show in a town.

- Would you like to participate in my puppet show? - asked the evil puppet master.

Pinocchio happily agreed. He was locked inside the evil puppet master's caravan.
 He wished he was safe with Geppetto. The blue fairy suddenly appeared.
  She listened to Pinocchio's desire and freed him. Pinocchio is happy to be free.

- I'm going straight to school - he said.

But he met an evil fox who told him about a wonderful place called Fun Island.
 Pinocchio completely forgot about school and gave the fox his spelling book in exchange for a ticket to Fun Island.

- Where are you going, Pinocchio? - asked the fairy b.

- I'm going to school - Pinocchio lied.

Pinocchio's nose became very, very long.
 He wishes he hadn't lied. The fairy called a bird to peck her long nose because Pinocchio was very sorry.
  Pinocchio promised never to be naughty again and went straight to school.

At school, Pinocchio told his friend all about Fun Island.
 His friend wanted to go with him. Pinocchio and his companions boarded a ship heading to Fun Island.
  On the island, they did not know that boys were turned into donkeys and used for very hard work.

Pinocchio cried and wished he hadn't come to the island.
 He also wished he didn't look like a silly ass.
  The blue fairy heard his wish and with a wave of her magic wand his donkey ears and tail disappeared.
   Sad Pinocchio on the beach, sadly looking at the sea. He wondered if he would ever see Geppetto again.

Suddenly he saw Geppetto, who sailed out to sea in search of Pinocchio. Geppetto didn't see the huge whale behind him. The whale swallowed Geppetto and his boat.
 Pinocchio knew he needed to save Geppetto. He jumped into the water and swam with all his might.
  As he approached, the whale opened its mouth and Pinocchio walked straight in.
   Deep inside the whale's belly, Pinocchio and Geppetto hugged each other, happy to be together again.

- We need to find a way out - said Gepeto - we will make a fire with the wood from my boat.

The smoke made the whale sneeze. They left the whale's mouth and returned to the sea.
 Pinocchio and Geppetto swam safely to shore. They were both tired. They lay down on the sand and fell asleep.
  When Geppetto woke up, he saw that the blue fairy, as a reward for being so brave, had transformed Pinocchio into a real boy.

- Finally my wish came true!
Pinocchio

shouted Geppetto.

Once upon a time there was a carver named Geppetto.
 He made puppets out of pieces of wood and called his favorite puppet Pinocchio.

- I would love to be the father of a real boy like Pinocchio - he wished.

That night, the blue fairy, who knew that Geppetto was a good man, cast a spell on Pinocchio.
 The next day, Gappetto woke up and was very happy to discover that Pinocchio could walk, sit and talk like a real boy.

Geppetto wanted to send Pinocchio to school. He sold his only coat for a spelling book.

- Now you can go to school like a real boy - help Gappetto as we wave to Pinocchio.

 
On the way to school, Pinocchio stopped to watch a puppet show in a town.

- Would you like to participate in my puppet show? - asked the evil puppet master.

Pinocchio happily agreed. He was locked inside the evil puppet master's caravan.
 He wished he was safe with Geppetto. The blue fairy suddenly appeared.
  She listened to Pinocchio's desire and freed him. Pinocchio is happy to be free.

- I'm going straight to school - he said.

But he met an evil fox who told him about a wonderful place called Fun Island.
 Pinocchio completely forgot about school and gave the fox his spelling book in exchange for a ticket to Fun Island.

- Where are you going, Pinocchio? - asked the fairy b.

- I'm going to school - Pinocchio lied.

Pinocchio's nose became very, very long.
 He wishes he hadn't lied. The fairy called a bird to peck her long nose because Pinocchio was very sorry.
  Pinocchio promised never to be naughty again and went straight to school.

At school, Pinocchio told his friend all about Fun Island.
 His friend wanted to go with him. Pinocchio and his companions boarded a ship heading to Fun Island.
  On the island, they did not know that boys were turned into donkeys and used for very hard work.

Pinocchio cried and wished he hadn't come to the island.
 He also wished he didn't look like a silly ass.
  The blue fairy heard his wish and with a wave of her magic wand his donkey ears and tail disappeared.
   Sad Pinocchio on the beach, sadly looking at the sea. He wondered if he would ever see Geppetto again.

Suddenly he saw Geppetto, who sailed out to sea in search of Pinocchio. Geppetto didn't see the huge whale behind him. The whale swallowed Geppetto and his boat.
 Pinocchio knew he needed to save Geppetto. He jumped into the water and swam with all his might.
  As he approached, the whale opened its mouth and Pinocchio walked straight in.
   Deep inside the whale's belly, Pinocchio and Geppetto hugged each other, happy to be together again.

- We need to find a way out - said Gepeto - we will make a fire with the wood from my boat.

The smoke made the whale sneeze. They left the whale's mouth and returned to the sea.
 Pinocchio and Geppetto swam safely to shore. They were both tired. They lay down on the sand and fell asleep.
  When Geppetto woke up, he saw that the blue fairy, as a reward for being so brave, had transformed Pinocchio into a real boy.

- Finally my wish came true!
Pinocchio

shouted Geppetto.

Once upon a time there was a carver named Geppetto.
 He made puppets out of pieces of wood and called his favorite puppet Pinocchio.

- I would love to be the father of a real boy like Pinocchio - he wished.

That night, the blue fairy, who knew that Geppetto was a good man, cast a spell on Pinocchio.
 The next day, Gappetto woke up and was very happy to discover that Pinocchio could walk, sit and talk like a real boy.

Geppetto wanted to send Pinocchio to school. He sold his only coat for a spelling book.

- Now you can go to school like a real boy - help Gappetto as we wave to Pinocchio.

 
On the way to school, Pinocchio stopped to watch a puppet show in a town.

- Would you like to participate in my puppet show? - asked the evil puppet master.

Pinocchio happily agreed. He was locked inside the evil puppet master's caravan.
 He wished he was safe with Geppetto. The blue fairy suddenly appeared.
  She listened to Pinocchio's desire and freed him. Pinocchio is happy to be free.

- I'm going straight to school - he said.

But he met an evil fox who told him about a wonderful place called Fun Island.
 Pinocchio completely forgot about school and gave the fox his spelling book in exchange for a ticket to Fun Island.

- Where are you going, Pinocchio? - asked the fairy b.

- I'm going to school - Pinocchio lied.

Pinocchio's nose became very, very long.
 He wishes he hadn't lied. The fairy called a bird to peck her long nose because Pinocchio was very sorry.
  Pinocchio promised never to be naughty again and went straight to school.

At school, Pinocchio told his friend all about Fun Island.
 His friend wanted to go with him. Pinocchio and his companions boarded a ship heading to Fun Island.
  On the island, they did not know that boys were turned into donkeys and used for very hard work.

Pinocchio cried and wished he hadn't come to the island.
 He also wished he didn't look like a silly ass.
  The blue fairy heard his wish and with a wave of her magic wand his donkey ears and tail disappeared.
   Sad Pinocchio on the beach, sadly looking at the sea. He wondered if he would ever see Geppetto again.

Suddenly he saw Geppetto, who sailed out to sea in search of Pinocchio. Geppetto didn't see the huge whale behind him. The whale swallowed Geppetto and his boat.
 Pinocchio knew he needed to save Geppetto. He jumped into the water and swam with all his might.
  As he approached, the whale opened its mouth and Pinocchio walked straight in.
   Deep inside the whale's belly, Pinocchio and Geppetto hugged each other, happy to be together again.

- We need to find a way out - said Gepeto - we will make a fire with the wood from my boat.

The smoke made the whale sneeze. They left the whale's mouth and returned to the sea.
 Pinocchio and Geppetto swam safely to shore. They were both tired. They lay down on the sand and fell asleep.
  When Geppetto woke up, he saw that the blue fairy, as a reward for being so brave, had transformed Pinocchio into a real boy.

- Finally my wish came true!
Pinocchio

shouted Geppetto.

Once upon a time there was a carver named Geppetto.
 He made puppets out of pieces of wood and called his favorite puppet Pinocchio.

- I would love to be the father of a real boy like Pinocchio - he wished.

That night, the blue fairy, who knew that Geppetto was a good man, cast a spell on Pinocchio.
 The next day, Gappetto woke up and was very happy to discover that Pinocchio could walk, sit and talk like a real boy.

Geppetto wanted to send Pinocchio to school. He sold his only coat for a spelling book.

- Now you can go to school like a real boy - help Gappetto as we wave to Pinocchio.

 
On the way to school, Pinocchio stopped to watch a puppet show in a town.

- Would you like to participate in my puppet show? - asked the evil puppet master.

Pinocchio happily agreed. He was locked inside the evil puppet master's caravan.
 He wished he was safe with Geppetto. The blue fairy suddenly appeared.
  She listened to Pinocchio's desire and freed him. Pinocchio is happy to be free.

- I'm going straight to school - he said.

But he met an evil fox who told him about a wonderful place called Fun Island.
 Pinocchio completely forgot about school and gave the fox his spelling book in exchange for a ticket to Fun Island.

- Where are you going, Pinocchio? - asked the fairy b.

- I'm going to school - Pinocchio lied.

Pinocchio's nose became very, very long.
 He wishes he hadn't lied. The fairy called a bird to peck her long nose because Pinocchio was very sorry.
  Pinocchio promised never to be naughty again and went straight to school.

At school, Pinocchio told his friend all about Fun Island.
 His friend wanted to go with him. Pinocchio and his companions boarded a ship heading to Fun Island.
  On the island, they did not know that boys were turned into donkeys and used for very hard work.

Pinocchio cried and wished he hadn't come to the island.
 He also wished he didn't look like a silly ass.
  The blue fairy heard his wish and with a wave of her magic wand his donkey ears and tail disappeared.
   Sad Pinocchio on the beach, sadly looking at the sea. He wondered if he would ever see Geppetto again.

Suddenly he saw Geppetto, who sailed out to sea in search of Pinocchio. Geppetto didn't see the huge whale behind him. The whale swallowed Geppetto and his boat.
 Pinocchio knew he needed to save Geppetto. He jumped into the water and swam with all his might.
  As he approached, the whale opened its mouth and Pinocchio walked straight in.
   Deep inside the whale's belly, Pinocchio and Geppetto hugged each other, happy to be together again.

- We need to find a way out - said Gepeto - we will make a fire with the wood from my boat.

The smoke made the whale sneeze. They left the whale's mouth and returned to the sea.
 Pinocchio and Geppetto swam safely to shore. They were both tired. They lay down on the sand and fell asleep.
  When Geppetto woke up, he saw that the blue fairy, as a reward for being so brave, had transformed Pinocchio into a real boy.

- Finally my wish came true!
Pinocchio

shouted Geppetto.

Once upon a time there was a carver named Geppetto.
 He made puppets out of pieces of wood and called his favorite puppet Pinocchio.

- I would love to be the father of a real boy like Pinocchio - he wished.

That night, the blue fairy, who knew that Geppetto was a good man, cast a spell on Pinocchio.
 The next day, Gappetto woke up and was very happy to discover that Pinocchio could walk, sit and talk like a real boy.

Geppetto wanted to send Pinocchio to school. He sold his only coat for a spelling book.

- Now you can go to school like a real boy - help Gappetto as we wave to Pinocchio.

 
On the way to school, Pinocchio stopped to watch a puppet show in a town.

- Would you like to participate in my puppet show? - asked the evil puppet master.

Pinocchio happily agreed. He was locked inside the evil puppet master's caravan.
 He wished he was safe with Geppetto. The blue fairy suddenly appeared.
  She listened to Pinocchio's desire and freed him. Pinocchio is happy to be free.

- I'm going straight to school - he said.

But he met an evil fox who told him about a wonderful place called Fun Island.
 Pinocchio completely forgot about school and gave the fox his spelling book in exchange for a ticket to Fun Island.

- Where are you going, Pinocchio? - asked the fairy b.

- I'm going to school - Pinocchio lied.

Pinocchio's nose became very, very long.
 He wishes he hadn't lied. The fairy called a bird to peck her long nose because Pinocchio was very sorry.
  Pinocchio promised never to be naughty again and went straight to school.

At school, Pinocchio told his friend all about Fun Island.
 His friend wanted to go with him. Pinocchio and his companions boarded a ship heading to Fun Island.
  On the island, they did not know that boys were turned into donkeys and used for very hard work.

Pinocchio cried and wished he hadn't come to the island.
 He also wished he didn't look like a silly ass.
  The blue fairy heard his wish and with a wave of her magic wand his donkey ears and tail disappeared.
   Sad Pinocchio on the beach, sadly looking at the sea. He wondered if he would ever see Geppetto again.

Suddenly he saw Geppetto, who sailed out to sea in search of Pinocchio. Geppetto didn't see the huge whale behind him. The whale swallowed Geppetto and his boat.
 Pinocchio knew he needed to save Geppetto. He jumped into the water and swam with all his might.
  As he approached, the whale opened its mouth and Pinocchio walked straight in.
   Deep inside the whale's belly, Pinocchio and Geppetto hugged each other, happy to be together again.

- We need to find a way out - said Gepeto - we will make a fire with the wood from my boat.

The smoke made the whale sneeze. They left the whale's mouth and returned to the sea.
 Pinocchio and Geppetto swam safely to shore. They were both tired. They lay down on the sand and fell asleep.
  When Geppetto woke up, he saw that the blue fairy, as a reward for being so brave, had transformed Pinocchio into a real boy.

- Finally my wish came true!
Pinocchio

shouted Geppetto.

Once upon a time there was a carver named Geppetto.
 He made puppets out of pieces of wood and called his favorite puppet Pinocchio.

- I would love to be the father of a real boy like Pinocchio - he wished.

That night, the blue fairy, who knew that Geppetto was a good man, cast a spell on Pinocchio.
 The next day, Gappetto woke up and was very happy to discover that Pinocchio could walk, sit and talk like a real boy.

Geppetto wanted to send Pinocchio to school. He sold his only coat for a spelling book.

- Now you can go to school like a real boy - help Gappetto as we wave to Pinocchio.

 
On the way to school, Pinocchio stopped to watch a puppet show in a town.

- Would you like to participate in my puppet show? - asked the evil puppet master.

Pinocchio happily agreed. He was locked inside the evil puppet master's caravan.
 He wished he was safe with Geppetto. The blue fairy suddenly appeared.
  She listened to Pinocchio's desire and freed him. Pinocchio is happy to be free.

- I'm going straight to school - he said.

But he met an evil fox who told him about a wonderful place called Fun Island.
 Pinocchio completely forgot about school and gave the fox his spelling book in exchange for a ticket to Fun Island.

- Where are you going, Pinocchio? - asked the fairy b.

- I'm going to school - Pinocchio lied.

Pinocchio's nose became very, very long.
 He wishes he hadn't lied. The fairy called a bird to peck her long nose because Pinocchio was very sorry.
  Pinocchio promised never to be naughty again and went straight to school.

At school, Pinocchio told his friend all about Fun Island.
 His friend wanted to go with him. Pinocchio and his companions boarded a ship heading to Fun Island.
  On the island, they did not know that boys were turned into donkeys and used for very hard work.

Pinocchio cried and wished he hadn't come to the island.
 He also wished he didn't look like a silly ass.
  The blue fairy heard his wish and with a wave of her magic wand his donkey ears and tail disappeared.
   Sad Pinocchio on the beach, sadly looking at the sea. He wondered if he would ever see Geppetto again.

Suddenly he saw Geppetto, who sailed out to sea in search of Pinocchio. Geppetto didn't see the huge whale behind him. The whale swallowed Geppetto and his boat.
 Pinocchio knew he needed to save Geppetto. He jumped into the water and swam with all his might.
  As he approached, the whale opened its mouth and Pinocchio walked straight in.
   Deep inside the whale's belly, Pinocchio and Geppetto hugged each other, happy to be together again.

- We need to find a way out - said Gepeto - we will make a fire with the wood from my boat.

The smoke made the whale sneeze. They left the whale's mouth and returned to the sea.
 Pinocchio and Geppetto swam safely to shore. They were both tired. They lay down on the sand and fell asleep.
  When Geppetto woke up, he saw that the blue fairy, as a reward for being so brave, had transformed Pinocchio into a real boy.

- Finally my wish came true!
Pinocchio

shouted Geppetto.

Once upon a time there was a carver named Geppetto.
 He made puppets out of pieces of wood and called his favorite puppet Pinocchio.

- I would love to be the father of a real boy like Pinocchio - he wished.

That night, the blue fairy, who knew that Geppetto was a good man, cast a spell on Pinocchio.
 The next day, Gappetto woke up and was very happy to discover that Pinocchio could walk, sit and talk like a real boy.

Geppetto wanted to send Pinocchio to school. He sold his only coat for a spelling book.

- Now you can go to school like a real boy - help Gappetto as we wave to Pinocchio.

 
On the way to school, Pinocchio stopped to watch a puppet show in a town.

- Would you like to participate in my puppet show? - asked the evil puppet master.

Pinocchio happily agreed. He was locked inside the evil puppet master's caravan.
 He wished he was safe with Geppetto. The blue fairy suddenly appeared.
  She listened to Pinocchio's desire and freed him. Pinocchio is happy to be free.

- I'm going straight to school - he said.

But he met an evil fox who told him about a wonderful place called Fun Island.
 Pinocchio completely forgot about school and gave the fox his spelling book in exchange for a ticket to Fun Island.

- Where are you going, Pinocchio? - asked the fairy b.

- I'm going to school - Pinocchio lied.

Pinocchio's nose became very, very long.
 He wishes he hadn't lied. The fairy called a bird to peck her long nose because Pinocchio was very sorry.
  Pinocchio promised never to be naughty again and went straight to school.

At school, Pinocchio told his friend all about Fun Island.
 His friend wanted to go with him. Pinocchio and his companions boarded a ship heading to Fun Island.
  On the island, they did not know that boys were turned into donkeys and used for very hard work.

Pinocchio cried and wished he hadn't come to the island.
 He also wished he didn't look like a silly ass.
  The blue fairy heard his wish and with a wave of her magic wand his donkey ears and tail disappeared.
   Sad Pinocchio on the beach, sadly looking at the sea. He wondered if he would ever see Geppetto again.

Suddenly he saw Geppetto, who sailed out to sea in search of Pinocchio. Geppetto didn't see the huge whale behind him. The whale swallowed Geppetto and his boat.
 Pinocchio knew he needed to save Geppetto. He jumped into the water and swam with all his might.
  As he approached, the whale opened its mouth and Pinocchio walked straight in.
   Deep inside the whale's belly, Pinocchio and Geppetto hugged each other, happy to be together again.

- We need to find a way out - said Gepeto - we will make a fire with the wood from my boat.

The smoke made the whale sneeze. They left the whale's mouth and returned to the sea.
 Pinocchio and Geppetto swam safely to shore. They were both tired. They lay down on the sand and fell asleep.
  When Geppetto woke up, he saw that the blue fairy, as a reward for being so brave, had transformed Pinocchio into a real boy.

- Finally my wish came true!
Pinocchio

shouted Geppetto.

Once upon a time there was a carver named Geppetto.
 He made puppets out of pieces of wood and called his favorite puppet Pinocchio.

- I would love to be the father of a real boy like Pinocchio - he wished.

That night, the blue fairy, who knew that Geppetto was a good man, cast a spell on Pinocchio.
 The next day, Gappetto woke up and was very happy to discover that Pinocchio could walk, sit and talk like a real boy.

Geppetto wanted to send Pinocchio to school. He sold his only coat for a spelling book.

- Now you can go to school like a real boy - help Gappetto as we wave to Pinocchio.

 
On the way to school, Pinocchio stopped to watch a puppet show in a town.

- Would you like to participate in my puppet show? - asked the evil puppet master.

Pinocchio happily agreed. He was locked inside the evil puppet master's caravan.
 He wished he was safe with Geppetto. The blue fairy suddenly appeared.
  She listened to Pinocchio's desire and freed him. Pinocchio is happy to be free.

- I'm going straight to school - he said.

But he met an evil fox who told him about a wonderful place called Fun Island.
 Pinocchio completely forgot about school and gave the fox his spelling book in exchange for a ticket to Fun Island.

- Where are you going, Pinocchio? - asked the fairy b.

- I'm going to school - Pinocchio lied.

Pinocchio's nose became very, very long.
 He wishes he hadn't lied. The fairy called a bird to peck her long nose because Pinocchio was very sorry.
  Pinocchio promised never to be naughty again and went straight to school.

At school, Pinocchio told his friend all about Fun Island.
 His friend wanted to go with him. Pinocchio and his companions boarded a ship heading to Fun Island.
  On the island, they did not know that boys were turned into donkeys and used for very hard work.

Pinocchio cried and wished he hadn't come to the island.
 He also wished he didn't look like a silly ass.
  The blue fairy heard his wish and with a wave of her magic wand his donkey ears and tail disappeared.
   Sad Pinocchio on the beach, sadly looking at the sea. He wondered if he would ever see Geppetto again.

Suddenly he saw Geppetto, who sailed out to sea in search of Pinocchio. Geppetto didn't see the huge whale behind him. The whale swallowed Geppetto and his boat.
 Pinocchio knew he needed to save Geppetto. He jumped into the water and swam with all his might.
  As he approached, the whale opened its mouth and Pinocchio walked straight in.
   Deep inside the whale's belly, Pinocchio and Geppetto hugged each other, happy to be together again.

- We need to find a way out - said Gepeto - we will make a fire with the wood from my boat.

The smoke made the whale sneeze. They left the whale's mouth and returned to the sea.
 Pinocchio and Geppetto swam safely to shore. They were both tired. They lay down on the sand and fell asleep.
  When Geppetto woke up, he saw that the blue fairy, as a reward for being so brave, had transformed Pinocchio into a real boy.

- Finally my wish came true!
Pinocchio

shouted Geppetto.

Once upon a time there was a carver named Geppetto.
 He made puppets out of pieces of wood and called his favorite puppet Pinocchio.

- I would love to be the father of a real boy like Pinocchio - he wished.

That night, the blue fairy, who knew that Geppetto was a good man, cast a spell on Pinocchio.
 The next day, Gappetto woke up and was very happy to discover that Pinocchio could walk, sit and talk like a real boy.

Geppetto wanted to send Pinocchio to school. He sold his only coat for a spelling book.

- Now you can go to school like a real boy - help Gappetto as we wave to Pinocchio.

 
On the way to school, Pinocchio stopped to watch a puppet show in a town.

- Would you like to participate in my puppet show? - asked the evil puppet master.

Pinocchio happily agreed. He was locked inside the evil puppet master's caravan.
 He wished he was safe with Geppetto. The blue fairy suddenly appeared.
  She listened to Pinocchio's desire and freed him. Pinocchio is happy to be free.

- I'm going straight to school - he said.

But he met an evil fox who told him about a wonderful place called Fun Island.
 Pinocchio completely forgot about school and gave the fox his spelling book in exchange for a ticket to Fun Island.

- Where are you going, Pinocchio? - asked the fairy b.

- I'm going to school - Pinocchio lied.

Pinocchio's nose became very, very long.
 He wishes he hadn't lied. The fairy called a bird to peck her long nose because Pinocchio was very sorry.
  Pinocchio promised never to be naughty again and went straight to school.

At school, Pinocchio told his friend all about Fun Island.
 His friend wanted to go with him. Pinocchio and his companions boarded a ship heading to Fun Island.
  On the island, they did not know that boys were turned into donkeys and used for very hard work.

Pinocchio cried and wished he hadn't come to the island.
 He also wished he didn't look like a silly ass.
  The blue fairy heard his wish and with a wave of her magic wand his donkey ears and tail disappeared.
   Sad Pinocchio on the beach, sadly looking at the sea. He wondered if he would ever see Geppetto again.

Suddenly he saw Geppetto, who sailed out to sea in search of Pinocchio. Geppetto didn't see the huge whale behind him. The whale swallowed Geppetto and his boat.
 Pinocchio knew he needed to save Geppetto. He jumped into the water and swam with all his might.
  As he approached, the whale opened its mouth and Pinocchio walked straight in.
   Deep inside the whale's belly, Pinocchio and Geppetto hugged each other, happy to be together again.

- We need to find a way out - said Gepeto - we will make a fire with the wood from my boat.

The smoke made the whale sneeze. They left the whale's mouth and returned to the sea.
 Pinocchio and Geppetto swam safely to shore. They were both tired. They lay down on the sand and fell asleep.
  When Geppetto woke up, he saw that the blue fairy, as a reward for being so brave, had transformed Pinocchio into a real boy.

- Finally my wish came true!
Pinocchio

shouted Geppetto.

Once upon a time there was a carver named Geppetto.
 He made puppets out of pieces of wood and called his favorite puppet Pinocchio.

- I would love to be the father of a real boy like Pinocchio - he wished.

That night, the blue fairy, who knew that Geppetto was a good man, cast a spell on Pinocchio.
 The next day, Gappetto woke up and was very happy to discover that Pinocchio could walk, sit and talk like a real boy.

Geppetto wanted to send Pinocchio to school. He sold his only coat for a spelling book.

- Now you can go to school like a real boy - help Gappetto as we wave to Pinocchio.

 
On the way to school, Pinocchio stopped to watch a puppet show in a town.

- Would you like to participate in my puppet show? - asked the evil puppet master.

Pinocchio happily agreed. He was locked inside the evil puppet master's caravan.
 He wished he was safe with Geppetto. The blue fairy suddenly appeared.
  She listened to Pinocchio's desire and freed him. Pinocchio is happy to be free.

- I'm going straight to school - he said.

But he met an evil fox who told him about a wonderful place called Fun Island.
 Pinocchio completely forgot about school and gave the fox his spelling book in exchange for a ticket to Fun Island.

- Where are you going, Pinocchio? - asked the fairy b.

- I'm going to school - Pinocchio lied.

Pinocchio's nose became very, very long.
 He wishes he hadn't lied. The fairy called a bird to peck her long nose because Pinocchio was very sorry.
  Pinocchio promised never to be naughty again and went straight to school.

At school, Pinocchio told his friend all about Fun Island.
 His friend wanted to go with him. Pinocchio and his companions boarded a ship heading to Fun Island.
  On the island, they did not know that boys were turned into donkeys and used for very hard work.

Pinocchio cried and wished he hadn't come to the island.
 He also wished he didn't look like a silly ass.
  The blue fairy heard his wish and with a wave of her magic wand his donkey ears and tail disappeared.
   Sad Pinocchio on the beach, sadly looking at the sea. He wondered if he would ever see Geppetto again.

Suddenly he saw Geppetto, who sailed out to sea in search of Pinocchio. Geppetto didn't see the huge whale behind him. The whale swallowed Geppetto and his boat.
 Pinocchio knew he needed to save Geppetto. He jumped into the water and swam with all his might.
  As he approached, the whale opened its mouth and Pinocchio walked straight in.
   Deep inside the whale's belly, Pinocchio and Geppetto hugged each other, happy to be together again.

- We need to find a way out - said Gepeto - we will make a fire with the wood from my boat.

The smoke made the whale sneeze. They left the whale's mouth and returned to the sea.
 Pinocchio and Geppetto swam safely to shore. They were both tired. They lay down on the sand and fell asleep.
  When Geppetto woke up, he saw that the blue fairy, as a reward for being so brave, had transformed Pinocchio into a real boy.

- Finally my wish came true!
Pinocchio

shouted Geppetto.

Once upon a time there was a carver named Geppetto.
 He made puppets out of pieces of wood and called his favorite puppet Pinocchio.

- I would love to be the father of a real boy like Pinocchio - he wished.

That night, the blue fairy, who knew that Geppetto was a good man, cast a spell on Pinocchio.
 The next day, Gappetto woke up and was very happy to discover that Pinocchio could walk, sit and talk like a real boy.

Geppetto wanted to send Pinocchio to school. He sold his only coat for a spelling book.

- Now you can go to school like a real boy - help Gappetto as we wave to Pinocchio.

 
On the way to school, Pinocchio stopped to watch a puppet show in a town.

- Would you like to participate in my puppet show? - asked the evil puppet master.

Pinocchio happily agreed. He was locked inside the evil puppet master's caravan.
 He wished he was safe with Geppetto. The blue fairy suddenly appeared.
  She listened to Pinocchio's desire and freed him. Pinocchio is happy to be free.

- I'm going straight to school - he said.

But he met an evil fox who told him about a wonderful place called Fun Island.
 Pinocchio completely forgot about school and gave the fox his spelling book in exchange for a ticket to Fun Island.

- Where are you going, Pinocchio? - asked the fairy b.

- I'm going to school - Pinocchio lied.

Pinocchio's nose became very, very long.
 He wishes he hadn't lied. The fairy called a bird to peck her long nose because Pinocchio was very sorry.
  Pinocchio promised never to be naughty again and went straight to school.

At school, Pinocchio told his friend all about Fun Island.
 His friend wanted to go with him. Pinocchio and his companions boarded a ship heading to Fun Island.
  On the island, they did not know that boys were turned into donkeys and used for very hard work.

Pinocchio cried and wished he hadn't come to the island.
 He also wished he didn't look like a silly ass.
  The blue fairy heard his wish and with a wave of her magic wand his donkey ears and tail disappeared.
   Sad Pinocchio on the beach, sadly looking at the sea. He wondered if he would ever see Geppetto again.

Suddenly he saw Geppetto, who sailed out to sea in search of Pinocchio. Geppetto didn't see the huge whale behind him. The whale swallowed Geppetto and his boat.
 Pinocchio knew he needed to save Geppetto. He jumped into the water and swam with all his might.
  As he approached, the whale opened its mouth and Pinocchio walked straight in.
   Deep inside the whale's belly, Pinocchio and Geppetto hugged each other, happy to be together again.

- We need to find a way out - said Gepeto - we will make a fire with the wood from my boat.

The smoke made the whale sneeze. They left the whale's mouth and returned to the sea.
 Pinocchio and Geppetto swam safely to shore. They were both tired. They lay down on the sand and fell asleep.
  When Geppetto woke up, he saw that the blue fairy, as a reward for being so brave, had transformed Pinocchio into a real boy.

- Finally my wish came true!
`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)
