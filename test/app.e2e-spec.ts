import axios from 'axios';


describe( 'AppController (e2e)', ()=>{

  it( 'ping-pong test', async ()=>{
    expect( String( (await axios.get( 'http://localhost:3000' )).data ).substr( 0, 4 ) ).toBe( "pong" );
  } );

} );
