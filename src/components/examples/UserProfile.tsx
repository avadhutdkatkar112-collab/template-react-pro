import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface UserProfileProps {
  name: string;
  email: string;
  role: string;
  avatarUrl?: string;
}

export function UserProfile({ name, email, role, avatarUrl }: UserProfileProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src={avatarUrl} alt={name} />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle>{name}</CardTitle>
            <CardDescription>{email}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Role:</span>
          <Badge variant="secondary">{role}</Badge>
        </div>
      </CardContent>
    </Card>
  );
}
