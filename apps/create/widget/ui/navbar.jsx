/*__@import:QoL/widget__*/
/*__@import:QoL/Url__*/
/*__@import:QoL/classNames__*/

const { pages, onPageChange } = props;

function renderNavbar({ open, setOpen, pages, onPageChange }) {
  return (
    <div
      className="navbar mb-3 navbar-expand-lg px-4 rounded-pill"
      style={{
        backgroundColor: "#f9fbfe",
        border: "1px solid #d1d5db",
      }}
    >
      <a
        className="navbar-brand d-flex align-items-center gap-2 text-decoration-none"
        href="#//*__@appAccount__*//widget/home"
        onClick={() => onPageChange("projects")}
      >
        <img
          src="https://ipfs.near.social/ipfs/bafkreifjxdfynw6icgtagcgyhsgq5ounl7u45i2pa2xadiax2bpg7kt3hu"
          alt="Create Logo"
          height={30}
          width={30}
          style={{
            marginBottom: 5,
          }}
        />
        <span
          style={{
            fontWeight: 600,
            letterSpacing: -1,
          }}
        >
          Create
        </span>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        onClick={() => setOpen(!open)}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className={classNames([
          "collapse navbar-collapse",
          open ? "show" : "hide",
        ])}
        id="navbarNav"
      >
        <ul className="navbar-nav">
          {Array.isArray(pages) &&
            pages.map((p) => {
              return (
                <li className="nav-item">
                  <a
                    className="nav-link text-capitalize text-decoration-none"
                    style={{
                      cursor: "pointer",
                    }}
                    onClick={() => onPageChange(p)}
                    href={Url.construct("#//*__@appAccount__*//widget/home", {
                      page: p,
                    })}
                  >
                    {p}
                  </a>
                </li>
              );
            })}
        </ul>
      </div>
      {/* Then this button could be installed on the gateway level */}
      <Widget
        src="nui.sking.near/widget/Input.Button"
        props={{
          children: (
            <>
              Share
              <i className="bi bi-share"></i>
            </>
          ),
          onClick: () => {
            const url = Storage.get("url");
            clipboard.writeText("https://everything.dev/" + url);
          },
          variant: "info outline",
          size: "md",
        }}
      />
    </div>
  );
}

State.init({
  mobileNavbarOpen: false,
});

const update = (k, v) => State.update({ [k]: v });

return (
  <>
    {renderNavbar({
      open: state.mobileNavbarOpen,
      setOpen: (v) => update("mobileNavbarOpen", v),
      pages,
      onPageChange,
    })}
  </>
);
