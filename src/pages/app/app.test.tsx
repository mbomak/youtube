import React from 'react';
import {render} from 'enzyme';
import App from './index';

describe('App tests', () => {
    const wrap = render(<App />);

    it('Should render sms amd epost forms in App', () => {
        expect(wrap.find('.header')).toHaveLength(1);
        expect(wrap.find('.content__tab-el')).toHaveLength(2);
    });
});
