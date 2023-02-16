import { all, call } from "typed-redux-saga/macro";
import { categoriesSaga } from "./categories/category.saga";
import { userSagas } from "./user/user.saga";
/**
 * The function* declaration (function keyword followed by an asterisk)
 * defines a generator function, which returns a Generator object.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*
 */
export function* rootSaga() {
	yield* all([call(categoriesSaga), call(userSagas)]);
}
