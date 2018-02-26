### Linked Lists Lab (05)

# Nd Module

The Nd Module contains the following list of functionality:

  1. The nd module contains the constructor to build Node objects for insertion into the linked lists. This constructor builds an object with a value property which is instantiated to an input value and a next property which is instantiated to "null"

          Big O: O(1)

          The required input(s) for this method are: 

            A data value for use in Node object instantiation.

          This method is tested for input verification, input validation, and output validation

# Single Linked List Module

The SLL Module contains the following list of functionality:

  1. The Single Linked List constructor builds an empty list item containing two properties head which represents the beginning of the list and is instantiated to "null" and lLen which represents the current list length and is instantiated to "0".

          Big O: O(1)  

          The required input(s) for this method are: 
        
            This functionality requires no inputs.

          This method is tested for input verification, input validation, and output validation.

  2. The insertHead Method of the SLL class uses the Nd Module to create a new Node and adds it to the head of the list. It accomplishes this by setting the next property on the new object to the current head and changing the head property of the list to the new Node object. Once this is completed it increments the lLen property of the list object.

          Big O: O(1)

          The required input(s) for this method are:

            This functionality requires a data value for use in Node object instantiation.

          This method is tested for input verification, input validation, output verification, and output validation.

  3. The insertTail Method of the SLL class uses the Nd Module to create a new Node and adds it to the end of the list. It accomplishes this by iterating to the end of the list then changing the last item's next value from "null" to the new Node object. Once this is completed it increments the lLen property of the list object.

          Big O: O(n)

          The required input(s) for this method are:

            This functionality requires a data value for use in Node object instantiation.

          This method is tested for input verification, input validation, output verification, and output validation.

  4. The remove Method of the SLL class iterates through the list to the nth object and removes it from the list. It accomplishes this by saving the current module as the previous module just before each iteration so that it can set the previous Node's next value to the next value of the node to be removed. Once this has been completed it decrements the lLen property of the list object.

          Big O: O(n)

          The required input(s) for this method are:

            This functionality requires a number value representing the list item to be removed.
        
          This method is tested for input verification, input validation, output verification, and output validation.

  5. The reverse Method of the SLL class reverses the list order. It accomplishes this through the use of a previous, current, next cycle where it stores the current node's next value in a next node variable before setting it to the previous node then stores the current node with the new link in the previous node variable and iterating to the next node variable.

          Big O: O(n)

          The required input(s) for this method are:

            This functionality requires no inputs.

          This method is tested for input verification, input validation, and output validation.

  6. The findNthNode Method of the SLL class finds the Nth node from the beginning of the list and returns it. It accomplishes this by iterating to the Nth position of the list starting at the list head object.

          Big O: O(n)

          The required input(s) for this method are:

            This functionality requires a number value representing the list item to be retrieved.

          This method is tested for input verification, input validation, and output validation.

  7. The findNthFromLastNode Method of the SLL class finds the Nth node from the end of the list and returns it. It accomplishes this by first subtracting "n" from the lLen value of the list object, then iterates to the object at that position and returns it.

          Big O: O(n)

          The required input(s) for this method are:

            This functionality requires a number value representing the list item to be retrieved, counting from the end of the list.

          This method is tested for input verification, input validation, and output validation.

# Lab 10 Stacks and Queues

## Nd Module

  This module contains a single unnamed class and constructor function which is used to instantiate node objects for the other modules. It takes a single argument which represents the value assigned to the node.

## Stack Module

  This module contains an unnamed class, constructor, and two prototype methods. It is used to instantiate the shell of the Stack as well as push, pop, and peek the stack. The constructor requires no arguments but can be passed an optional maximum size which defaults to 1048.

  1. Push: similar to the array method push adds and item to the stack, however instead of adding it to the end of an array, it adds it to the top of the stack. This method takes a single argument in the form of a value which it passes through the node constructor before putting the returned node ontop of the stack. Increments the stack size before ending the method.

  2. Pop: just like push this method is similar to the array method. It's designed to remove the top item from the stack and return it for use. This modifies the stack by removing the top item and dereferencing it from the stack. The method takes no arguments. Decrements the stack size before ending the function.

  3. Peek: The purpose of this method is to look at the top item of the stack, it literally just returns the stack top property.

## Queue Module

  This module like the other two contains a nameless class, constructor and two methods. It is used to instantiate a queue for node objects to be inserted into. The constructor requires no arguments however much like the stack constructor it can take an optional maxSize which defaults to 1048 as well.

  1. Enqueue: This method is used to insert nodes into the queue, it inserts them at the end of the line assigning them to the next value of the last node in the queue. It takes a single argument which is passed through the node constructor to instantiate the node to be inserted. This then increments the queue size.

  2. Dequeue: This method is used to remove the front item from the queue. This is done by assigning the front value of the queue to the second node after placing the previous front in a temp variable to return. It then changes the next of the node being removed to null, decrements the queue size and returns the node that was removed.

  # K-Ary Trees and Whiteboard 15

### K-Ary Trees

  * Tree Node Constructor

          This Constructor takes in a value and sets it to value, it is used during execution of the insert method.

  * Tree Constructor

          This Constructor takes in no values and constructs the shell of the tree.

  * Insert

          This method takes in a value argument to be passed to the Tree Node Constructor and a parent value saying which node it should belong to. It then executes the breadthFirst method to search through the list for that parent node and pushes it to the parents children.

  * BreadthFirst

          This method iterates through the tree placing each node into a queue for use in the callback on each iteration.

  * RemoveByVal

          This method removes the first node found with the value provided.