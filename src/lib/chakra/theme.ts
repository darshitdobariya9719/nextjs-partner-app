import { buttonRecipe } from "@/app/components/ui-components/Buttons/theme"
import { createSystem, defaultConfig } from "@chakra-ui/react"
export const system = createSystem(defaultConfig, {
  theme: {
    recipes: {
      button: buttonRecipe,
      
    },
    tokens: {
      fonts: {
        heading: { value: `'Figtree', sans-serif` },
        body: { value: `'Figtree', sans-serif` },
      },
    },
  },
})
