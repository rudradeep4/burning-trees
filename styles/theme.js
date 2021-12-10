import { extendTheme } from "@chakra-ui/react"
import '@fontsource/dela-gothic-one'
import '@fontsource/kelly-slab'

export const theme = extendTheme({
    colors: {
        primary: "black",
        accent: "#F7F7F6"
    },
    fonts: {
        heading: "Kelly Slab",
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
                        borderColor: "accent",
                        textColor: "accent",
                        fontSize: "xs",
                        _placeholder: { color: "#FFFFFF", opacity: 1 },
                        _hover: { borderColor: "accent" }
                    }
                }
            }
        },
        Button: {
            variants: {
                "outline": {
                    borderColor: "accent",
                    borderRadius: "md",
                    color: "accent",
                    _hover: {bg: "primary", color: "accent"}
                },
                "playlist": {
                    borderRadius: "md",
                    borderColor: "accent",
                    borderWidth: "thin",
                    size: "md",
                    bg: "primary",
                    textColor: "accent",
                    fontWeight: "regular", 
                    fontSize: "xs",
                    _hover: { bg: "accent", textColor: "primary" }
                }
            }
        }
    }
})