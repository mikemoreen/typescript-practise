// Implement the built-in Pick<T, K> generic without using it.

// Constructs a type by picking the set of properties K from T

// For example:

// interface Todo {
//   title: string
//   description: string
//   completed: boolean
// }

// type TodoPreview = MyPick<Todo, 'title' | 'completed'>

// const todo: TodoPreview = {
//     title: 'Clean room',
//     completed: false,
// }

// type MyPick<T, K extends keyof T> = { [P in K]: T[P] };


// infer - сделать вывод, вывести, опеределить

/** 
 * 
 * 
*/
// type Payment = {
//     amount: number;
//     currency: string;
//     currencySign?: string;
// }

// type ObjectKey  = keyof Payment;

// type GetReturnType<Type> = Type extends (...args: never[]) => infer Return
//   ? Return
//   : never;
  
// type Num = GetReturnType<() => number>;

// type MyType<T> = T extends Object ? 'sting' : never;
// type T1 = MyType<{b: string}> // T1 is { b: string; }
// type T1 = MyType<{b: string}> // T1 is { b: string; }

// type Point = { x: number; y: number };
// type P = keyof Point;

// type Todo = {
//     title: string
//     description: string
//     completed: boolean
//   }


// type test = keyof Todo
interface Todo {
    title: string
    description: string
    completed: boolean
  }

type Todo1 = 'description' | 'completed' | 'title'

type MyOmit<T, Keys> =  T extends Keys ? Keys : never

type Test = MyOmit<Todo1, 'description' | 'completed' | 'title'>