function example(){

	class MyClass {
		constructor(){
			this.foo = 'bar'
		}

		standard() {
			return
		}

		async async() {
			return await new Promise(res=>true)
		}

		*generator() {
			yield 321
		}
	}

	function namedFunction(){
		return 1
	}
	async function asyncFn() {
		this.async = true
	}

	function* generatorFn() {
		yield 1
	}

	const fnObj = {
		foo: function(){ return 1},
		bar: () => 2,
	}
	fnObj.baz = function baz(){}

	class CustomError extends Error {
		constructor(message) {
			super(message)
			this.name = 'CustomError'
		}
	}


	const object = {

		strings: {
			string: "XRay demo",
			whitespace: "   whitespace  ",
			multiline: "hello\nworld",
			// long: "lorem ipsum ".repeat(10),
			longish: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			empty: "",
		},

		numeric: {
			int: 1234,
			float: 12.34,
			nan: NaN,
			infinity: Infinity,
		},

		primitives: {
			bool: true,
			null: null,
			undefined: undefined,
		},

		array: [1337, ['x','y'], true],

		object: {
			foo: "bar",
			bar: 42,
			baz: true,
		},

		array_empty: [],
		object_empty: {},

		collections: {
			map: new Map([['key', 'value'], [1, 'int'], [{a:1}, 'object'], [function foo(){}, 'function'], [()=>{}, 'anonFn'], [class Classy{}, 'class'], [Symbol('s'), 'symbol']]),
			set: new Set(['foo', {a:1, b:2}, ['x','y'], 42, true]),
			map_empty: new Map(),
			set_empty: new Set(),
			weakMap: new WeakMap(),
			weakSet: new WeakSet(),
		},

		instances: {
			date_instance: new Date(),
			regex_instance: new RegExp('hello (\w+)'),
			promise_instance: new Promise(res=>{}),
			localStorage: localStorage
		},

		functions: {
			anonymous_function: function(){},
			named_function: namedFunction,
			async_function: asyncFn,
			generator_function: generatorFn,
			class: MyClass,

			anon_function_instance: new (function(){this.anon=true})(),
			class_instance: new MyClass(),

			object: fnObj,
		},

		typed_arrays: {
			Int8Array: new Int8Array([21,31]),
			Uint16Array: new Uint16Array([21,31]),
			Float64Array: new Float64Array([21,31]),
			ArrayBuffer: new ArrayBuffer(8),
		},

		errors: {
			error: new Error('oops!'),
			syntax_error: new SyntaxError('argh!'),
			custom_error: new CustomError('ohnoes!'),
		},

		other: {
			symbol: Symbol('foo'),
		},

		circular: {},

		unsupported: {
			set_iterator: (new Set()).keys(),
			DataView: new DataView(new ArrayBuffer(16), 0),
		},
	}

	object.circular = object

	return object
}

export default example