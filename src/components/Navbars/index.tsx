import Container from 'react-bootstrap/Container'; 
import Navbar from 'react-bootstrap/Navbar'; 


function Navbars() { 
    return (
        <>
            <Navbar expand="lg" className='bg-body-tertiary'>
                <Container>
                    <Navbar.Brand href='#home'>
                        Heroes
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse className='justify-content-end'>
                        <Navbar.Text>Teste:
                            <a href='#login'>tomaz</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
    } 

export default Navbars;