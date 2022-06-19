
//unit - px
childWidth = 100
childPadding = 10
childBorder = 1
childMargin = 20

parentWidth = 110

childSize = childWidth + ( childPadding + childBorder + childMargin ) * 2
overflow  = childSize > parentWidth  //Boolean
alert( " Horizontal child size " + childSize + "px")
alert(" child overflow? " + overflow )

//HW2: PRINT How much over?
difference = childSize - parentWidth
alert( "Child overflow with"+ difference + "px" )