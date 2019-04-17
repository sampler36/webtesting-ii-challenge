import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Display from './Display';

describe('<Display />', () => {
    it('should render scores', () => {
        render(<Display />);
    });

    it('should render balls ', () => {
        const display = render(<Display balls={0} />);
        expect(display.getByText(/Balls/));
    });

    it('should render strikes ', () => {
        const display = render(<Display strikes={0} />);
        expect(display.getByText(/Strikes/));
    });
    it('should render fouls ', () => {
        const display = render(<Display fouls={0} />);
        expect(display.getByText(/Fouls/));
    });
    it('should render hits ', () => {
        const display = render(<Display hits={0} />);
        expect(display.getByText(/Hit/));
    });
 
    it('should render 0 when nothing no button has been pressed', () => {
        const display = render(<Display strikes={0} balls={0} fouls={0} hits={0}/>);
        expect(display.getByText(/Strikes/i));
        expect(display.getByText(/Balls/i));
        expect(display.getByText(/Fouls/i));
        expect(display.getByText(/Hit/i));
    });
})