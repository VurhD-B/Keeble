import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const Guide = () => {
    return (
        <div className="text-text-white flex flex-col p-10">
            <h5 className='place-self-center mb-3'><b>What is going on in the Build Page?</b></h5>
            <p>
                The Build page helps you make your own mechanical keyboard using parts recommended by us! 
                The page takes you through a bunch of steps that one could take to make their own mechanical keyboard.<br />
                On the left side, is a list of products by parts. With the help of our filters, 
                select one of your liking, and it will be added to the Assembly Area on the right side.<br />
                This is repeated for the remaining main parts, after which you can see the mechanical keyboard you created in the Assembly Area! 
                After which, you may also add optional accessories to your build.<br />
                If you like your creation, you can save it as a favorite build, which will be displayed in your profile for everyone to see.
            </p>
            <img className="place-self-center mt-10" src="/buildguide1.png" width="500" height="600"></img>


            <h5 className='place-self-center mt-20 mb-3'><b>I'm completely new to this. I want to know what the parts are!</b></h5>
            <p className='mb-10'>
                The anatomy of a mechanical keyboard is quite complex. To keep things simple, let's narrow it down to its three main parts:
            </p>

            <div className='m-5'>
                <i>Base</i>
                <p>
                    In reality, the base of a mechanical keyboard consists of multiple parts, from the case to the printed circuit board (PCB) and the plate. 
                    However, the products that we offer here will feature pre-built bases, so that you don't need to worry too much about what goes on inside it.<br />
                    The base is the container for all your other mechanical keyboard parts. 
                    There are different sizes of bases, each suited to a different purpose.
                </p>
            </div>

            <Grid container rowSpacing={2} columnSpacing={2} className="justify-center mb-20 mt-8 gap-10">
                <Box componet = 'div' className="overflow-y-auto"
                    sx={{
                        width:300, height:400, backgroundColor:'#565656', padding:"16px",
                    }}>
                    <img className="" src="https://keeble-sample.s3.ap-southeast-1.amazonaws.com/Bases/100%25.jpg"></img><br/>
                    <strong className='block text-center'>Full-Size | 100%</strong><br/>
                    <ul className='text-center'>
                        <li>104 keys, similar to the traditional keyboard with everything included</li>
                        <br></br>
                        <li>Good for lots of number entry.</li>
                    </ul>
                    
                </Box>
                <Box className="overflow-y-auto"
                    sx={{
                        width:300, height:400, backgroundColor:'#565656', padding:"16px",
                    }}>
                        <img className="" src="https://keeble-sample.s3.ap-southeast-1.amazonaws.com/Bases/TKL.png"></img><br/>
                    <strong className='block text-center'>Tenkeyless (TKL) [Recommended]</strong><br />
                    <ul className='text-center'>
                        <li>87 keys, similar to the full-size board, but without the number pad</li>
                        <br></br>
                        <li>Compact and Well balanced.</li>
                    </ul>
                </Box>
                <Box className="overflow-y-auto"
                    sx={{
                        width:300, height:400, backgroundColor:'#565656', padding:"16px",
                    }}>
                        <img className="" src="https://keeble-sample.s3.ap-southeast-1.amazonaws.com/Bases/75%25.png"></img><br/>
                    <strong className='block text-center'>75%</strong><br />
                    <ul className='text-center'>
                        <li>84 keys, also known as the compact TKL keyboard.</li>
                        <br></br>
                        <li>Gaining in popularity among enthusiast</li>
                    </ul>
                </Box>
                <Box className="overflow-y-auto"
                    sx={{
                        width:300, height:400, backgroundColor:'#565656', padding:"16px",
                    }}>
                        <img className="" src="https://keeble-sample.s3.ap-southeast-1.amazonaws.com/Bases/65%25.png"></img><br/>
                    <strong className='block text-center'>65%</strong><br />
                    <ul className='text-center'>
                        <li>Around 70 keys</li>
                        <br></br>
                        <li>60% keyboard with the arrow keys and other important function keys</li>
                    </ul>
                </Box>
                <Box className="overflow-y-auto"
                    sx={{
                        width:300, height:400, backgroundColor:'#565656', padding:"16px",
                    }}>
                        <img className="" src="https://keeble-sample.s3.ap-southeast-1.amazonaws.com/Bases/60%25.jpg"></img><br/>
                    <strong className='block text-center'>60%</strong><br/>
                    <ul className='text-center'>
                        <li>Around 61 keys</li>
                        <br></br>
                        <li>Very compact and portable</li>
                    </ul>
                </Box>
            </Grid>

            <div className='m-10'>
                <i>Switches</i>
                <p>
                    The switch is used to register the press of a key on your mechanical keyboard. 
                    There are 3 types of switches - the differences between them lies mainly between the sounds they make, and their actuation force*.
                </p>
            </div>
            <Grid container rowSpacing={2} columnSpacing={2} className="justify-center mb-20 mt-8 gap-20">
                <Box className="overflow-y-auto"
                    
                    sx={{
                        width:300, height:300, backgroundColor:'#565656', padding:"16px",
                    }}>
                    <strong className='block text-center'>Linear</strong><br />
                    <ul className='text-center'>
                        <li>Closest experience to other normal keyboards.</li>
                        <li>Same travel force from beginning to end of press, leading to a smooth and consistent feel with minimal clicking sounds.</li>
                        <li>Preferred by Gamers, Fast Typists due to the lower actuation point</li>
                    </ul>
                </Box>
                <Box className="overflow-y-auto"
                    sx={{
                        width:300, height:300, backgroundColor:'#565656', padding:"16px",
                    }}>
                    <strong className='block text-center'> Tactile [Recommended]</strong><br />
                    <ul className='text-center'>
                        <li>Sweet middle ground between clicky and linear switches.</li>
                        <li>Includes the tactile bump with a softer sound.</li>
                        <li>Preferred by most keyboard enthusiast.</li>
                    </ul>
                </Box>
                <Box className="overflow-y-auto"
                    sx={{
                        width:300, height:300, backgroundColor:'#565656', padding:"16px",
                    }}>
                    <strong className='block text-center'>Clicky</strong><br />
                    <ul className='text-center'>
                        <li>A satisfying click along with a tactile bump with every press.</li>
                        <li>Often preferred for touch typing.</li>
                        <li>Can be a little loud for office environments.</li>
                    </ul>
                </Box>
            </Grid>
            <p>*Actuation force is the amount of pressure needed (in g) to register a key press.</p>

            <div className='m-10'>
                <i>Keycaps</i>
                <p>
                    Keycaps cover the switches on your mechanical keyboard, so that you can really customize the design of your keyboard 
                    (and also so that you're not prodding switches). They come in different materials and profiles.
                </p>
            </div>
            <Grid container rowSpacing={2} columnSpacing={2} className="justify-center mb-20 mt-8 gap-10">
                <Box className="overflow-y-auto"
                    sx={{
                        width:300, height:300, backgroundColor:'#565656', padding:"16px",
                    }}>
                    <strong className='block text-center'>ABS (Acrylonitrile Butadiene Styrene) Material</strong><br />
                    <ul className='text-center'>
                        <li>Cheap option with a smooth surface.</li>
                        <li>Commonly found in pre-built keyboards.</li>
                        <li>However, they are prone to wear.</li>
                    </ul>
                </Box>
                <Box className="overflow-y-auto"
                    sx={{
                        width:300, height:300, backgroundColor:'#565656', padding:"16px",
                    }}>
                    <strong className='block text-center'>PBT (Polybutylene Terephthalate) Material [Recommended] </strong><br />
                    <ul className='text-center'>
                        <li>The higher quality option.</li>
                        <li>Textured surface. </li>
                        <li>Resistance to oils from fingers.</li>
                    </ul>
                </Box>
                <Box className="overflow-y-auto"
                    sx={{
                        width:300, height:300, backgroundColor:'#565656', padding:"16px",
                    }}>
                    <strong className='block text-center'>OEM Profile [Recommended]</strong><br />
                    <ul className='text-center'>
                        <li>Low height and slightly curved top.</li>
                    </ul>
                </Box>
                <Box className="overflow-y-auto"
                    sx={{
                        width:300, height:300, backgroundColor:'#565656', padding:"16px",
                    }}>
                    <strong className='block text-center'>Cherry Profile [Recommended] </strong><br />
                    <ul className='text-center'>
                        <li>Actually very similar to OEM keycaps, but with cylindrical tops to “hug” your finger.</li>
                    </ul>
                </Box>
                <Box className="overflow-y-auto"
                    sx={{
                        width:300, height:300, backgroundColor:'#565656', padding:"16px",
                    }}>
                    <strong className='block text-center'>DSA Profile</strong><br />
                    <ul className='text-center'>
                        <li>Uniform, flat shape.</li>
                    </ul>
                </Box>
            </Grid>
        </div>
    )
}

export default Guide