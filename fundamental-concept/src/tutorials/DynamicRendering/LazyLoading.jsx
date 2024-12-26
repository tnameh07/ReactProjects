import { useState, Suspense, lazy } from 'react';
import Loading from './Loading.jsx';

const MarkdownPreview = lazy(() => delayForDemo(import('./MarkdownPreview.jsx')));


{
     /* 
     Lazy-loading components with Suspense 
    Usually, you import components with the static import declaration:
    import MarkdownPreview from './MarkdownPreview.js';
    To defer loading this component’s code until it’s rendered for the first time, replace this import with:
    import { lazy } from 'react';

const MarkdownPreview = lazy(() => import('./MarkdownPreview.js'));

Now that your component’s code loads on demand, you also need to specify what should be displayed while it is loading. 
You can do this by wrapping the lazy component or any of its parents into a <Suspense> boundary:
<Suspense fallback={<Loading />}>
  <h2>Preview</h2>
  <MarkdownPreview />
</Suspense> 

*/   }
export default function MarkdownEditor() {
    const [showPreview, setShowPreview] = useState(false);
    const [markdown, setMarkdown] = useState('Hello, **world**!');
    return (
        <>
            <textarea value={markdown} onChange={e => setMarkdown(e.target.value)} />
            <label>
                <input type="checkbox" checked={showPreview} onChange={e => setShowPreview(e.target.checked)} />
                Show preview
            </label>
            <hr />
            {showPreview && (
                <Suspense fallback={<Loading />}>
                    <h2>Preview</h2>
                    <MarkdownPreview markdown={markdown} />
                </Suspense>
            )}
        </>
    );
}

// Add a fixed delay so you can see the loading state
function delayForDemo(promise) {
    return new Promise(resolve => {
        setTimeout(resolve, 2000);
    }).then(() => promise);
}
