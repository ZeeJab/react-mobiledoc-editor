import {jsdom} from 'jsdom';

global.document = jsdom('');
global.window = document.defaultView;

// Stub some DOM specs that jsdom doesn't support
global.window.getSelection = () => null;
global.MutationObserver = () => ({ observe: () => null });

import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import sinonChai from 'sinon-chai';

chai.use(chaiEnzyme());
chai.use(sinonChai);
