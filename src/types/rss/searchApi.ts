export interface SearchSuggestions {
  _declaration: Declaration;
  toplevel: Toplevel;
}

export interface Declaration {
  _attributes: Attributes;
}

export interface Attributes {
  version: string;
}

export interface Toplevel {
  CompleteSuggestion: CompleteSuggestion[];
}

export interface CompleteSuggestion {
  suggestion: Suggestion;
}

export interface Suggestion {
  _attributes: Attributes2;
}

export interface Attributes2 {
  data: string;
}
