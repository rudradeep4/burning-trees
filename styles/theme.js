import { extendTheme } from "@chakra-ui/react"
import '@fontsource/rampart-one'
import '@fontsource/dela-gothic-one'

export const theme = extendTheme({
    colors: {
        primary: "black",
        accent: "#F7F7F6"
    },
    fonts: {
        heading: "Rampart One",
        body: "Dela Gothic One"
    },
    components: {
        Text: {
            variants: {
                "view": {
                    color: "accent",
                    textAlign: "center",
                    fontSize: "md"
                }
            }
        },
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