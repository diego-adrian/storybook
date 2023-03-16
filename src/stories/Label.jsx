const Label = ({ label, show }) => {
  return <>
    <section>{ show && <>{label}</>}</section>
  </>
};

export { Label };