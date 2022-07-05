import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem";

describe('Pruebas en <GifItem />', () => {

    const title = 'Saitama';
    const url = 'https://media0.giphy.com/media/oxbNORcXx76F2/giphy.gif?cid=790b7611efc366d5514dca055f60907589e7a9b4096867c9&rid=giphy.gif&ct=g';

    test('debe de hacer match con el snapshot', () => {
        
        const { container } = render( <GifItem title={title} url={url} /> );        
        expect( container ).toMatchSnapshot();

    });

    test('debe de mostrar la imagen con el URL y al ALT indicado', () => { 

        render( <GifItem title={title} url={url} /> );
        //screen.debug();
        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(alt);

     });

     test('debe de mostrar el titulo en el componente', () => { 

        render( <GifItem title={title} url={url} /> );
        expect( screen.getByText( title ) ).toBeTruthy();

      });

})