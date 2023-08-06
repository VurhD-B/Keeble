import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const Guide = () => {
    return (
        <div className="text-text-white flex flex-col">
            <h5><b>What is going on in the Build Page?</b></h5>
            <p>
                The Build page helps you make your own mechanical keyboard using parts recommended by us! 
                The page takes you through a bunch of steps that one could take to make their own mechanical keyboard.<br />
                On the left side, is a list of products by parts. With the help of our filters, 
                select one of your liking, and it will be added to the Assembly Area on the right side.<br />
                This is repeated for the remaining main parts, after which you can see the mechanical keyboard you created in the Assembly Area! 
                After which, you may also add optional accessories to your build.<br />
                If you like your creation, you can save it as a favorite build, which will be displayed in your profile for everyone to see.
            </p>
            <img src="/buildguide1.png" width="500" height="600"></img>


            <h5>I'm completely new to this. I want to know what the parts are!</h5>
            <p>
                The anatomy of a mechanical keyboard is quite complex. To keep things simple, let's narrow it down to its three main parts:
            </p>

            <i>Base</i>
            <p>
                In reality, the base of a mechanical keyboard consists of multiple parts, from the case to the printed circuit board (PCB) and the plate. 
                However, the products that we offer here will feature pre-built bases, so that you don't need to worry too much about what goes on inside it.<br />
                The base is the container for all your other mechanical keyboard parts. 
                There are different sizes of bases, each suited to a different purpose.
            </p>
            <Grid container rowSpacing={2} columnSpacing={2} className="m-20 gap-10">
                <Box
                    sx={{
                        width:300, height:300, backgroundColor:'#565656', padding:"16px",
                    }}>
                    <strong>Full-Size | 100%</strong><br />
                    <ul className='list-none'>
                        <li>104 keys, everything included, from the number pad to modifiers and the arrow cluster</li>
                        <li>Good for lots of number entry.</li>
                    </ul>
                </Box>
                <Box
                    sx={{
                        width:300, height:300, backgroundColor:'#565656', padding:"16px",
                    }}>
                    <strong>[Recommended] Tenkeyless (TKL)</strong><br />
                    <ul className='list-none'>
                        <li>87 keys, no number pad</li>
                        <li>Well balanced.</li>
                    </ul>
                </Box>
                <Box
                    sx={{
                        width:300, height:300, backgroundColor:'#565656', padding:"16px",
                    }}>
                    <strong>75%</strong><br />
                    <ul className='list-none'>
                        <li>84 keys, also known as the compact TKL keyboard.</li>
                        <li>Compact, saves space.</li>
                    </ul>
                </Box>
                <Box
                    sx={{
                        width:300, height:300, backgroundColor:'#565656', padding:"16px",
                    }}>
                    <strong>65%</strong><br />
                    <ul className='list-none'>
                        <li>Around 70 keys</li>
                        <li>75% keyboard without the function row.</li>
                        <li>Also compact and portable.</li>
                    </ul>
                </Box>
                <Box
                    sx={{
                        width:300, height:300, backgroundColor:'#565656', padding:"16px",
                    }}>
                    <strong>60%</strong><br />
                    <ul className='list-none'>
                        <li>61 keys</li>
                        <li>65% keyboard without the arrow keys.</li>
                        <li>Great for gaming and customizing.</li>
                    </ul>
                </Box>
            </Grid>
        </div>
    )
}

export default Guide