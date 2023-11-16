/*
Link:- https://intspirit.medium.com/understanding-the-browsers-event-loop-for-building-high-performance-web-applications-part-1-fe4b573a1520

So basic behaviour of js is execute code line by line. so if we write which take time to execute or we have code which extracts data from the third party apis then it will block our code.

so overcome to situation js introduce asynchronous.

in asynchronous, basically we put over code to seprate queue. it will execute over there and our rest of our code can execute in call stack. once rest of our code finish executing in call stack then our asynchronous code will added in call stack from queue. this thing done by event loop.

event loop put your asynchronous code to call stack from queue.

There are two types of queue one is macrotask(task queue) queue and another one is microtask queue. microtask queue has more priority then macro task queue.

Note: promise and async, await has more priority then callbacks, setTimeouts, setintervals



*/