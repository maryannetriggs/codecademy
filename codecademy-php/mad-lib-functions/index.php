<?php

function generateStory($singular_noun, $verb, $colour, $distance_unit)
{
  $story = "\nThe ${singular_noun}s are lovely, ${colour}, and deep.\nBut I have promises to keep,\nAnd ${distance_unit} to go before I ${verb},\nAnd ${distance_unit} to go before I ${verb}.\n";
  return $story;
}

echo generateStory("kettle", "swim", "teal", "kilometers");
echo generateStory("cat", "cook", "purple", "miles");
echo generateStory("bath", "jump", "green", "fathoms");

# Can be simplified with the inbuilt str_replace() function

echo str_replace(array("wood", "sleep", "dark", "miles"), array("kettle", "swim", "teal", "kilometers"), "\nThe woods are lovely, dark, and deep.\nBut I have promises to keep,\nAnd miles to go before I sleep,\nAnd miles to go before I sleep.\n");
echo str_replace(array("wood", "sleep", "dark", "miles"), array("cat", "cook", "purple", "miles"), "\nThe woods are lovely, dark, and deep.\nBut I have promises to keep,\nAnd miles to go before I sleep,\nAnd miles to go before I sleep.\n");
echo str_replace(array("wood", "sleep", "dark", "miles"), array("bath", "jump", "green", "fathoms"), "\nThe woods are lovely, dark, and deep.\nBut I have promises to keep,\nAnd miles to go before I sleep,\nAnd miles to go before I sleep.\n");
