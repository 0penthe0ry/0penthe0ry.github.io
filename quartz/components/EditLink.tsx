import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { i18n } from "../i18n"

export default (() => {
  function EditLink({ fileData, cfg }: QuartzComponentProps) {
    // Suppress the link on the home page index
    if (fileData.slug === "index") return null

    // Point this to your specific repository path
    const repoUrl = "https://github.com/0penthe0ry/0penthe0ry.github.io"
    const branch = "main"
    
    // Construct the direct link to the source file on GitHub
    const fileRelativePath = fileData.filePath
    const editUrl = `${repoUrl}/edit/${branch}/${fileRelativePath}`

    return (
      <div className="edit-link-container" style={{ margin: "1rem 0", fontSize: "0.9rem" }}>
        <a 
          href={editUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ 
            color: "var(--secondary)", 
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: "0.4rem"
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
          </svg>
          Edit this page on GitHub
        </a>
      </div>
    )
  }

  return EditLink
}) satisfies QuartzComponentConstructor
