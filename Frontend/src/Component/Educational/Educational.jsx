const Educational = ({ blog }) => {
  const base = "educational-page";

  return (
    <section className={base}>
      <div className={`${base}__container`}>
        <h1 className={`${base}__title`}>{blog.title}</h1>

        <p
          className={`${base}__text`}
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </div>
    </section>
  );
};

export default Educational