import { extendTheme } from "@chakra-ui/react"
import '@fontsource/rampart-one'
import '@fontsource/dela-gothic-one'

export const theme = extendTheme({
    colors: {
        primary: "black",
        primaryR: "linear-gradient(to top, #c04848, #480048)",
        navBar: "#262A2C",
        accent: "#F7F7F6",
        neonYellow: "#FFF01F",
        neonGreen: "#72BF44",
        neonOrange: "#F79548",
        neonPink: "#FF4FA7",
        neonRed: "#F72119"
    },
    fonts: {
        heading: "Rampart One",
        body: "Dela Gothic One"
    },
    components: {
        Button: {
            variants: {
                "enter": {
                    borderRadius: "full",
                    bg: "accent",
                    textColor: "primary"
                }
            }
        },
        Kbd: {
            variants: {
                "normal": {
                    w: 400,
                    bg: "primary",
                    color: "accent",
                    borderColor: "accent",
                    borderRadius: "sm",
                    _hover: { borderColor:"primary" },
                    _focus: { borderColor:"primary" }
                }
            }
        }
    }
})