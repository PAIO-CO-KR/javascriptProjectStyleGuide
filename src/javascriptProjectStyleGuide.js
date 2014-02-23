/**
 * @copyright
 * 이곳에 적용될 라이센스를 넣습니다. 라이센스의 상단에는 jsdoc3에 따라 copyright annotate를 합니다.
 * Javascript Project Style Guide
 * Copyright (C) [[년도]]  [[연락처]]
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 *
 */

// 인라인 콘피그 옵션(공통옵션은 폴더의 ".jshintrc"파일에 존재합니다. 현재 파일을 위한 별도의 콘피그가 필요한 경우 아래에 명시합니다)
/* jshint undef: true, unused: true, onevar: false */

// 인라인 글로벌(현재 코드에서 보이지 않으나 존재하는 변수들을 선언해 줍니다)
/* global console, define */

/**
 * 모든 모듈, 변수, 함수에는 jsdoc3에 따라 코맨트를 달아줍니다.
 * Closure 패턴 형식의 모듈선언에 코맨트없는 경우 가독성을 매우 떨어뜨리게 되므로
 * 상세한 성멸이 없는 경우라 할지라도 비어있는 코맨트를 넣어줍니다.
 *
 * 예제 모듈 설명
 *
 * @module
 */
(function (root, factory) {
	'use strict';
	if (typeof module === 'object' && module.exports) {
		// Node/CommonJS
		module.exports = factory();
	} else if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		define(factory);
	} else {
		// Browser globals
		root.ModuleName = factory();
	}
}(this, function factory() {
	'use strict';
	/**
	 * public static variable
	 * 이 클래스를 공유하는 모든 인스턴스에서 접근 가능하며 다른 언어의 static과 동일하게 동작합니다.
	 * @type {string}
	 */
	var publicStaticVar = 'public static variable';

	/**
	 * private static variable
	 * @type {number}
	 */
	var privateStaticVar = 0;

	/**
	 * constant variable
	 * 상수이름은 대문자에 _ 로 이어줍니다.
	 * @constant {number}
	 */
	var CONST_VAR = 0;

	/**
	 * public static function
	 * @param param1 예제 파라메터1
	 * @param param2 예제 파라메터2
	 * @returns {number}
	 */
	var publicStaticFunc = function (param1, param2) {
		privateStaticFunc();
		param1 = param1 + param2;
		console.log('static public func ');
		return 0;
	};

	/**
	 * private static function
	 * @param param 예제 파라메터
	 */
	var privateStaticFunc = function (param) {
		privateStaticVar += 1;
		console.log('static private func ' + privateStaticVar);
	};

	/**
	 * static과 constant를 제외한 클래스의 선언으로 볼 수 있습니다.
	 * closure 패턴과 비슷하나 재사용을 위해 즉시 함수 실행을 하지 않음에 주의.
	 * @constructor
	 */
	return function () {

		/**
		 * public instance variable
		 * @type {string}
		 */
		var publicVar = 'public';


		/**
		 * private instance variable
		 * @type {number}
		 */
		var privateVar = 0;


		/**
		 * public instance function
		 * @param param 예제 파라메터
		 */
		var publicFunc = function (param) {
			privateFunc();
			console.log('public func ' + param);
		};


		/**
		 * private instance function
		 */
		var privateFunc = function () {
			privateVar += 1;
			console.log('private func ' + privateVar);
		};


		return {
			CONST_VAR: CONST_VAR,
			publicStaticVar: publicStaticVar,
			publicStaticFunc: publicStaticFunc,
			publicVar: publicVar,
			publicFunc: publicFunc
		};
	};
}));



