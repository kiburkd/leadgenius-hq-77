import { Mail, Globe, LinkedinIcon } from "lucide-react";

interface ContactInfoProps {
  email?: string;
  website?: string;
  linkedin?: string;
}

const ContactInfo = ({ email, website, linkedin }: ContactInfoProps) => {
  return (
    <div className="space-y-3 mt-4">
      {email && (
        <div className="flex items-center gap-3 text-sm text-gray-600 hover:bg-gray-50 p-2 rounded-lg transition-colors">
          <Mail className="h-4 w-4 text-primary" />
          <a href={`mailto:${email}`} className="hover:text-primary transition-colors">
            {email}
          </a>
        </div>
      )}
      {website && (
        <div className="flex items-center gap-3 text-sm text-gray-600 hover:bg-gray-50 p-2 rounded-lg transition-colors">
          <Globe className="h-4 w-4 text-primary" />
          <a href={website} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            {website}
          </a>
        </div>
      )}
      {linkedin && (
        <div className="flex items-center gap-3 text-sm text-gray-600 hover:bg-gray-50 p-2 rounded-lg transition-colors">
          <LinkedinIcon className="h-4 w-4 text-primary" />
          <a href={linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            {linkedin}
          </a>
        </div>
      )}
    </div>
  );
};

export default ContactInfo;