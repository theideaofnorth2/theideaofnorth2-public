import {
	watchOriginClick,
	watchEggClick,
	watchDestinationInterviewClick,
	watchInterviewSelectionClick,
	watchInterviewUnselectionClick,
	watchExitClick,
	watchStorieClick,
	watchExplorationClick,
} from './animation';
import { watchApp } from './app';
import { loadConfig } from './config';

export default function *rootSaga() {
	yield [
		watchApp(),
		watchOriginClick(),
		watchDestinationInterviewClick(),
		watchInterviewSelectionClick(),
		watchInterviewUnselectionClick(),
		watchEggClick(),
		watchExitClick(),
		watchStorieClick(),
		watchExplorationClick(),
		loadConfig(),
	];
}