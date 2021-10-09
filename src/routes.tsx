import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import ProjectDetails from './pages/ProjectDetails'
import Projects from './pages/Projects'

const Routes = () => {

    return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/projects/:id" component={ProjectDetails} />
                {/* <Route exact path="/blog" component={Blog} />
            <Route exact path="/blog/:id" component={BlogDetail} />
            <Route exact path="/blog/:id/edit" component={BlogEdit} />
            <Route exact path="/blog/new" component={BlogNew} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/admin/blog" component={AdminBlog} />
            <Route exact path="/admin/blog/:id" component={AdminBlogDetail} />
            <Route exact path="/admin/blog/:id/edit" component={AdminBlogEdit} />
            <Route exact path="/admin/blog/new" component={AdminBlogNew} />
            <Route exact path="/admin/portfolio" component={AdminPortfolio} />
            <Route exact path="/admin/portfolio/:id" component={AdminPortfolioDetail} />
            <Route exact path="/admin/portfolio/:id/edit" component={AdminPortfolioEdit} />
            <Route exact path="/admin/portfolio/new" component={AdminPortfolioNew} />
            <Route exact path="/admin/contact" component={AdminContact} />
            <Route exact path="/admin/contact/:id" component={AdminContactDetail} />
            <Route exact path="/admin/contact/:id/edit" component={AdminContactEdit} />
            <Route exact path="/admin/contact/new" component={AdminContactNew} />
            <Route exact path="/admin/about" component={AdminAbout} />
            <Route exact path="/admin/about/:id" component={AdminAboutDetail} />
            <Route exact path="/admin/about/:id/edit" component={AdminAboutEdit} /> */}
            </Switch>
    )
}


export default Routes;