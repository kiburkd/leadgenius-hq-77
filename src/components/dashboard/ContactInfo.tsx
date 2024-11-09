import { Mail, Globe, LinkedinIcon } from "lucide-react";

interface ContactInfoProps {
  email?: string;
  website?: string;
  linkedin?: string;
}

const ContactInfo = ({ email, website, linkedin }: ContactInfoProps) => {
  return (
    <div className="space-y-2 mt-3">
      {email && (
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Mail className="h-4 w-4" />
          <a href={`mailto:${email}`} className="hover:text-primary">
            {email}
          </a>
        </div>
      )}
      {website && (
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Globe className="h-4 w-4" />
          <a href={website} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
            {website}
          </a>
        </div>
      )}
      {linkedin && (
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <LinkedinIcon className="h-4 w-4" />
          <a href={linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
            {linkedin}
          </a>
        </div>
      )}
    </div>
  );
};

export default ContactInfo;