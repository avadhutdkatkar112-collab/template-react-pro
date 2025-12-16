import { LoginForm } from "./components/examples/LoginForm";
import { UserProfile } from "./components/examples/UserProfile";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";

function App() {
  return (
    <div className="container mx-auto py-8">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-2">React Pro Template</h1>
        <p className="text-muted-foreground">
          50+ pre-built components powered by Shadcn UI
        </p>
      </div>

      <Tabs defaultValue="components" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="components">Components</TabsTrigger>
          <TabsTrigger value="examples">Examples</TabsTrigger>
          <TabsTrigger value="about">About</TabsTrigger>
        </TabsList>

        <TabsContent value="components" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Available Components</CardTitle>
              <CardDescription>
                This template includes 50+ production-ready components
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                <Button variant="default">Button</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="examples" className="space-y-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold mb-4">Login Form</h3>
              <LoginForm />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">User Profile</h3>
              <UserProfile
                name="John Doe"
                email="john@example.com"
                role="Administrator"
              />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="about">
          <Card>
            <CardHeader>
              <CardTitle>About This Template</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm dark:prose-invert max-w-none">
              <p>
                This template is designed for iSTUDIOX AI app builder and includes:
              </p>
              <ul>
                <li>50+ Shadcn UI components</li>
                <li>Tailwind CSS for styling</li>
                <li>TypeScript for type safety</li>
                <li>Vite for fast development</li>
                <li>Example components to get started</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default App;
