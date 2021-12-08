import { extendTheme } from "@chakra-ui/react"
import '@fontsource/dela-gothic-one'
import '@fontsource/turret-road'

export const theme = extendTheme({
    colors: {
        primary: "black",
        accent: "#F7F7F6"
    },
    fonts: {
        heading: "Turret Road",
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
        },
        Input: {
            variants: {
                "outline": {
                    field: {
                        bg: "none",
                        borderColor: "primary",
                        textColor: "primary",
                        fontSize: "xs",
                        _placeholder: { color: "#000000", opacity: 1 },
                        _hover: { borderColor: "primary" }
                    }
                }
            }
        },
        Button: {
            variants: {
                "outline": {
                    borderColor: "primary",
                    borderRadius: "full",
                    color: "primary" 
                }
            }
        }
    }
})