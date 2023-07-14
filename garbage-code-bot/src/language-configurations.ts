import { javascriptTaskGuidelines } from "./task-guidelines"

export type LanguageConfiguration = {
  language: string
  title: string
  languageGuidelines: string
}

export const languageConfigurations = [
  {
    language: "javascript",
    title: "Javascript",
    languageGuidelines: javascriptTaskGuidelines,
  },
  {
    language: "python",
    title: "Python",
    languageGuidelines: "",
  },
  {
    language: "ruby",
    title: "Ruby",
    languageGuidelines: "",
  },
  {
    language: "php",
    title: "PHP",
    languageGuidelines: "",
  },
] satisfies Array<LanguageConfiguration>

export const getLanguageConfiguration = (
  language: string
): LanguageConfiguration => {
  const config = languageConfigurations.find(
    (languageConfiguration) => languageConfiguration.language === language
  )
  if (!config)
    throw new Error(`Couldn't find config for language "${language}"`)
  return config
}

export const getLanguageConfigurationOrNull = (
  language: string
): LanguageConfiguration | null => {
  try {
    return getLanguageConfiguration(language)
  } catch (e) {
    return null
  }
}
