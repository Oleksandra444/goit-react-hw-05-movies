import { StyledForm, StyledInput, StyledButton } from "./SearchedForm.styled"

export const SearchForm = ({handleSubmit, query}) => {

  return <>
  <StyledForm onSubmit={handleSubmit}>
        <StyledInput type="text"
            autoComplete="off"
            autoFocus
            placeholder="Який фільм будемо шукати?"
            name="query"
            defaultValue={query} 
                />
      
        <StyledButton type="submit">Шукати</StyledButton>
    </StyledForm>
  </>
}
