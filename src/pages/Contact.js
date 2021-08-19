import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';

function Contact() {
  return (
    <>
      <h1>Thanks for looking at my project!</h1>
      <p>
        If you have any feedback, or want to contact me, you can send me an
        email <code>arfat@gmail.com</code> or you can fill this form.
      </p>

      <form>
        <FormGroup>
          <FormLabel>Email</FormLabel>
          <TextField id="outlined-basic" label="Email" variant="outlined" />
        </FormGroup>
        <TextareaAutosize
          aria-label="minimum height"
          minRows={3}
          placeholder="Minimum 3 rows"
        />
      </form>
    </>
  );
}

export { Contact };
