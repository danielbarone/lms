import { makeStyles } from '@material-ui/core/styles';
import Image from '../../assets/img/marbleTexture3.jpg'; // Import using relative path
//Image of marble from https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fmarble&psig=AOvVaw1RkxeG7Sq7jel9NfjWBdjT&ust=1607624499253000&source=images&cd=vfe&ved=0CA0QjhxqFwoTCPDN75DCwe0CFQAAAAAdAAAAABAD
//freepik.com/free-photos-vectors/marble
const useStyles = makeStyles((theme) => ({
    root: {},
    dashboardH1: {
      color: `${theme.colors.text.primary}`,
    },
    borrowerCardBackground:{
        // color: `${theme.colors.text.primary}`,
        // backgroundColor: `${theme.colors.text.secondary}`,
        // color: `${theme.colors.text.secondary}`,
        // backgroundColor: `${theme.colors.text.primary}`,
        width: '250px',
        alignContent: "center",
        textAlign: "center",
        marginLeft: "35%",
        backgroundColor: `${theme.colors.background.primary}`,
        borderRadius: "1",
        borderColor:`${theme.colors.text.primary}`,
        border: "5px solid",
        boxShadow: "5px 10px "+`${theme.colors.text.secondary}`,
        color: "#1b0324",
    },
    borrowerCardText:{
        //color: `${theme.colors.text.primary}`,
       // color: "black",
       // backgroundColor: `${theme.colors.text.secondary}`,

      // backgroundImage: `url(${"data:image/jpeg;base64,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"})`,
      backgroundImage: `url(${Image})`, 
      // width: '50%',
    },
    borrowerCardLines:{
        //backgroundColor: `${theme.colors.text.primary}`,
        //height: "2px",
        //textSizeAdjust:"-50%",
        //color: `${theme.colors.text.primary}`,
       // color: "black",
        //border: "5px solid",
        borderBottomStyle: "solid",
        textShadow: ".5px 1px"
        //text-decoration: underline;
        //font-weight: bold;
    },
    borrowerCardInfo1:{
       // color: `${theme.colors.text.primary}`,
      // color: "black",
        fontSize: "16px",
        fontFamily: "Lucida Handwriting",
        fontWeight: "bold",

    },
    highlight:{
        // color: `${theme.colors.text.primary}`,
        color: `${theme.colors.text.secondary}`,
         // fontSize: "16px",
          fontWeight: "bold",
    
     },
     button1:{
        ...theme.buttons.primary,
        },
}));

export default useStyles;