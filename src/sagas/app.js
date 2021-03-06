import { takeEvery } from 'redux-saga';
import { take, put } from 'redux-saga/effects';

function* initApp() {
	yield [take('CONFIG_READY'), take('ZOOMERS_MOUNTED'), take('MAP_READY')];
	yield put({ type: 'APP_READY' });
}

export default function* watchApp() {
	yield* takeEvery(['CONFIG_FETCH'], initApp);
}
