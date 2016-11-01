
import keymirror from 'keymirror'
const PROTOCOL = 'http';
const HOST = 'localhost';
const PORT = 9999;
const CONTEXT_ROOT = 'golden_gate';
export default {
	BASE_URL: PROTOCOL + '://' + HOST + ':' + PORT + '/' + CONTEXT_ROOT,
	URLS : {'AUDIT_TRAIL': '/auditTrail', 'AGENTS': '/agents'},
	ACTIONS: keymirror({
		REQUEST_AUDIT_TRAIL_DATA: null,
		RECEIVE_AUDIT_TRAIL_DATA: null,
		SET_ERROR_MESSAGE: null,
		RESET_ERROR_MESSAGE: null
  	}),
	VERBS: keymirror({
		GET: null,
		POST: null,
		PUT: null,
		DELETE: null
	})  
}